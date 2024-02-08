# 禁用内核更新

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

# gnome 必备扩展

- gnome-extension-app: 开启扩展功能及内置的一些扩展
- Blur-My-Shell: 让面板, 顶栏, Overview, 锁屏, gnome 自带的截屏, 甚至特定的 app, 都能被毛玻璃化
- Appindicator: 显示托盘图标
- Clipboard Indicator: 剪贴板历史记录
- Dash to Panel: 将 dash 和 gnome 顶栏合并, 类似任务栏
- 添加最大化最小化按钮:
  - gnome-tweaks
  - 使用命令: `gsettings set org.gnome.desktop.wm.preferences button-layout ":minimize,maximize,close"`
