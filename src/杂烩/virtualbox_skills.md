# 回收 VDI 磁盘空间

1. 删除虚拟机快照
1. linux 虚拟机中执行：

```bash
sudo dd if=/dev/zero of=/empty bs=1M
sudo rm -f /empty
sudo shutdown now
```

3. 在宿主机上, 用如下命令压缩 vdi 磁盘文件:

```
VBoxManage.exe modifymedium disk "d:\VMs\your_vid_filename.vdi" --compact
```

# 后台开关虚拟机

```bash
VBoxManage.exe startvm Debian --type headless
VBoxManage.exe controlvm Debian savestate
```

根据上述命令，可以实现下面的脚本

```bat
@echo off
set VM_NAME=Debian

REM 检查虚拟机是否正在运行
VBoxManage.exe list runningvms | findstr /C:"%VM_NAME%" >nul
if %errorlevel% equ 0 (
    REM 虚拟机正在运行，关闭它
    VBoxManage.exe controlvm %VM_NAME% savestate
    echo 虚拟机 %VM_NAME% 已关闭。
) else (
    REM 虚拟机未运行，启动它
    VBoxManage.exe startvm %VM_NAME% --type headless
    echo 虚拟机 %VM_NAME% 已启动。
)
pause
```

# 调整磁盘大小

virtualbox 扩展磁盘的大小。之后进入虚拟机进行如下操作：

## 确认磁盘和分区状态

在 Live 环境的终端中，再次检查磁盘情况：

```bash
sudo fdisk -l /dev/sda
```

输出应该显示您的磁盘总大小已经变大（比如 400G），并且末尾有一块 `未使用` 的空间。记录下 `/dev/sda4` 的起始扇区（`Start` 列），**这个数字至关重要，绝对不能错**。

例如，输出可能类似：

```
设备       启动    起点      末尾      扇区   大小 Id 类型
/dev/sda1  *       2048    1050623   1048576   512M  b W95 FAT32
/dev/sda2       1050624  59768831  58718208    28G 83 Linux
/dev/sda4      59768832 629512191 569743360 271.7G 83 Linux
```

（注意：如果磁盘已扩大，但 `fdisk` 显示的总大小没变，可能需要先运行 `partprobe` 让内核重新读取磁盘信息。）

## 使用 `fdisk` 删除并重建 `/dev/sda4`

我们将通过删除原来的 `/dev/sda4` 并立即在相同起始位置、但更大的结束位置重建它来实现扩展。**只要起始扇区不变，文件系统数据就不会被破坏。**

1. 启动 `fdisk` 操作 `/dev/sda`：

   ```bash
   sudo fdisk /dev/sda
   ```

2. 打印当前分区表（用于再次确认：

   ```
   Command (m for help): p
   ```

   仔细核对 `/dev/sda4` 的起始扇区。

3. 删除 `/dev/sda4` 分区：

   ```
   Command (m for help): d
   Partition number (1-4, default 4): 4
   ```

   分区 `4` 被删除。**别担心，数据还在磁盘上，只是分区表里没了它的记录。**

4. 创建一个新的分区：

   ```
   Command (m for help): n
   ```

   - 选择分区类型（主分区还是扩展分区，通常选主分区）：
     ```
     Partition type
        p   primary (3 primary, 0 extended, 1 free)
        e   extended (container for logical partitions)
     Select (default p): p
     ```
   - 分区号：输入 `4`，让它仍然叫 `/dev/sda4`。
     ```
     Partition number (4, default 4, first sector): 4
     ```
   - **起始扇区**：这是最关键的一步！**必须输入之前记录的原始 `/dev/sda4` 的起始扇区**（例如上面的 `59768832`）。如果 `fdisk` 提供了一个默认值，并且这个默认值正好是原来的起始扇区，直接回车即可。
     ```
     First sector (xxxx-xxxxxxxx, default xxxxx): [这里直接回车或输入原起始扇区]
     ```
   - 结束扇区：**直接按回车，使用默认的最大值**。这样就会把所有剩余未分配的空间都分配给这个新分区。
     ```
     Last sector, +/-sectors or +/-size{K,M,G,T,P} (xxxx-xxxxxxxx, default xxxxxx): [直接按回车]
     ```

5. 验证分区表：

   ```
   Command (m for help): p
   ```

   检查新创建的 `/dev/sda4`，它的起始扇区必须和原来一模一样，但结束扇区应该变大了，尺寸也变成了整个磁盘的容量。

6. 写入更改：
   如果一切看起来都正确，将新的分区表写入磁盘。
   ```
   Command (m for help): w
   ```
   `fdisk` 会输出 `The partition table has been altered.` 然后退出。

## 扩展文件系统

现在分区变大了，但里面的 `ext4` 文件系统仍然保持着原来的大小。我们需要使用 `resize2fs` 命令来扩展文件系统以填满整个新分区

```bash
# 首先检查文件系统，确保没有错误
sudo e2fsck -f /dev/sda4

# 然后调整文件系统大小，让它占用分区上的所有空间
sudo resize2fs /dev/sda4
```
