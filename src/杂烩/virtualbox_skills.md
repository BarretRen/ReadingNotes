# 回收 VDI 磁盘空间

linux 虚拟机中执行：

```bash
sudo dd if=/dev/zero of=/empty bs=1M
sudo rm -f /empty
sudo shutdown now
```

在宿主机上, 用如下命令压缩 vdi 磁盘文件:

```
VBoxManage.exe modifyhd "d:\VMs\your_vid_filename.vdi" --compact
```
