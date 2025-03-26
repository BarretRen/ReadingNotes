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
