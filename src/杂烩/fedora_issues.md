# dnf 配置

## 增量下载

增量下载，把软件增加的部分下载下来，和原软件包合成新软件包。

在`/etc/dnf/dnf.conf`中添加如下内容:

```
deltarpm=true

#其他配置
gpgcheck=1
installonly_limit=3
clean_requirements_on_remove=True
best=False
skip_if_unavailable=True
fastestmirror=1
max_parallel_downloads=10
```

## 禁用内核更新

Fedora,一个 RHEL 的激进发行版，永远追求最新的技术，以极高的频率推送软件更新，甚至包含内核，可以说是一个激进分子.
那如何只更新其他软件,禁止内核更新呢? 方法如下:

在`/etc/dnf/dnf.conf`中添加如下内容:

```
exclude=kernel*
```

# 关闭 selinux

- 方法 1：在`/etc/default/grub`添加内核启动参数：`GRUB_CMDLINE_LINUX_DEFAULT="selinux=0"`
- 方法 2：修改 SELinux 的配置文件/etc/selinux/config，如下：

```
SELINUX=disabled
SELINUXTYPE=minimum
```

# nvidia 驱动

禁用安全启动, 执行如下命令:

```bash
sudo dnf update #确保你使用最新内核，然后重启。
sudo dnf install akmod-nvidia

#如果你使用可利用 CUDA 的应用程序（如 Davinci Resolve、Blender 等），请安装：
sudo dnf install xorg-x11-drv-nvidia-cuda
#重启前至少等待 5 分钟，以便内核模块构建完成
modinfo -F version nvidia #检查内核模块是否已构建
#重启
```
