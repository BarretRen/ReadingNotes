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
