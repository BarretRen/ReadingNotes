# RIME 安装

RIME 本身是一个输入法引擎，它在不同平台有不同的适配，分别是：

| 平台    | 对应的适配                                  |
| ------- | ------------------------------------------- |
| Linux   | 中州韵（通过 IBus 或 Fcitx 输入法框架运行） |
| Windows | 小狼毫                                      |
| macOS   | 鼠须管、小企鹅输入法（Fcitx）               |
| Android | 同文输入法（TRIME）                         |
| iOS     | 仓输入法（开源免费）、iRime（付费）         |

## windows

下载小狼毫安装即可，安装完成后，小狼毫默认启用。在 Windows 10/11，你可以按「Windows+空格」快捷键切换输入法。

## linux

`sudo apt install fcitx5-rime`安装。
安装完成后，在终端里运行 fcitx5-configtool，打开 Fcitx 设置工具。在右侧的「可用输入法」中找到 RIME，双击它，以将其添加到「当前输入法」列表。

# 雾凇拼音安装

## windows

1. 第一步，右键点击任务栏上的 RIME 图标，选择「输入法设定」，打开配置工具
1. 第二步，在配置工具中，点击左下角的「获取更多输入方案」按钮
1. 第三步，随后会出现一个命令行窗口，在提示符「Enter package name...」后，输入雾凇拼音的包名:`iDvel/rime-ice:others/recipes/full`
1. 第四步，回车确认，随即 RIME 会自动下载、安装雾凇拼音输入方案.
1. 回到小狼毫配置工具，将列表往下拉，你就会看到雾凇拼音的选项。勾选它，然后单击「中」按钮，确认.

## linux

Linux 发行版用户可以使用 RIME 官方的「东风破（Plum）」工具来安装雾凇拼音:

```bash
git clone --depth 1 https://github.com/rime/plum ~/plum
# 切换到东风破的目录
cd ~/plum

# 如果你使用Fcitx5，你需要加入参数，让东风破把配置文件写到正确的位置
rime_frontend=fcitx5-rime bash rime-install iDvel/rime-ice:others/recipes/full

# 如果你是用IBus，则不需加参数，因为东风破默认是为IBus版的RIME打造。
bash rime-install iDvel/rime-ice:others/recipes/full
```

# rime 配置文件

RIME 的配置文件、输入方案、符号集合及词库文件，均为特定格式的文本文档：

- 用户对全局设定的定制信息： `default.custom.yaml`, 用于设置输入法方案、切换输入法快捷键、中英文切换、翻页等等。
- 用户对发行版设定的定制信息：比如`weasel.custom.yaml`, 用于设置托盘图标、指定软件默认英文输入、候选词横竖排列、界面布局、配色方案等等。
- 用户对预设输入方案的定制信息：`<方案标识>.custom.yaml`, 用于设置具体的输入方案。
