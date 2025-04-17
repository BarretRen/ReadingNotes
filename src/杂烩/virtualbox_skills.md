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

先执行 fdisk 查看原分区的起始值，一定要记住。
进 fdisk 删除原有分区， 再重建原有分区，再分区的时候起始值一定要跟原来的是一样的，要不然就会破坏原分区的数据，只要调整分区结束值大小即可扩容分区。

分区建好后， 用 e2fsck 先检查一下分区， 再用 resize2fs 扩大就可以了

```c
sudo e2fsck -f /dev/sda1
sudo resize2fs /dev/sda1
```
