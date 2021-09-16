
# 简介

Vim是从 vi 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用，和Emacs并列成为类Unix系统用户最喜欢的文本编辑器。
使用vim先知道其设计理念是很重要的,有助于记忆,举一反三。

Bram Moolenaar 在 80 年代末购入他的Amiga计算机时，Amiga 上没有他最常用的编辑器vi。Bram 从一个开源的 vi 复制 Stevie 开始，开发了 Vim 的 1.0版本。最初的目标只是完全复制 vi 的功能，那个时候的 Vim 是Vi IMitation（模拟）的简称。

1991 年 Vim 1.14 版被 "Fred Fish Disk #591" ——Amiga 用的免费软体集收录了。1992 年 1.22 版本的 Vim 被移植到了 UNIX 和MS-DOS上。从那个时候开始，Vim 的全名就变成 Vi IMproved（改良）了。

在这之后，Vim 加入了不计其数的新功能。做为第一个里程碑的是 1994 年的 3.0 版本加入了多视窗编辑模式（分割视窗）。从那之后，同一荧幕可以显示的 Vim 编辑文件数可以不止一个了。1996 年发布的 Vim 4.0 是第一个利用图型接口（GUI）的版本。

1998 年 5.0 版本的 Vim 加入了 highlight（语法高亮）功能。2001 年的 Vim 6.0 版本加入了代码折叠、插件、多国语言支持、垂直分割视窗等功能。

2006 年 5 月发布的 Vim 7.0 版更加入了拼字检查、上下文相关补完，标签页编辑等新功能。

2008 年 8 月发布的 Vim 7.2，该版本合并了 vim 7.1 以来的所有修正补丁，并且加入了脚本的浮点数支持.

2010年08月15日，历时两年的时间，vim又发布了vim 7.3这个版本，这个版本修复了前面版本的一些bug，以及添加了一些新的特征，这个版本比前面几个版本来的要更加优秀
十年以后，Vim 终于发布了一个新的大版本 8.0[2]  ，结束了从 2006 年 5 月 7 日开始的 7.0 世代。虽然这十年间，Vim 也一直在不断更新，从 7.0 到三年前的 7.4，每隔一两年或两三年就会有个小版本更新，但是这次跨越大版本更新，带来了不少新的特性，据说有一些是从其它的 Vi 流派吸收来的特性。

---


## 我的配置


### github地址：

[VimProfiles](https://github.com/barretren/VimProfiles)


### 主要插件

插件的作用请自行查询，如下提供我的配置中的插件，其中有些是我自己的github库

```
Plug 'majutsushi/tagbar'
Plug 'vim-scripts/EasyGrep'
Plug 'Yggdroot/indentLine'
Plug 'vim-scripts/Mark--Karkat'
Plug 'scrooloose/nerdtree'
Plug 'scrooloose/nerdcommenter'
Plug 'vim-scripts/a.vim'
Plug 'https://github.com/skywind3000/asyncrun.vim.git'
Plug 'jlanzarotta/bufexplorer'
Plug 'jiangmiao/auto-pairs'
Plug 'octol/vim-cpp-enhanced-highlight'
Plug 'aceofall/gtags.vim'
Plug 'vim-scripts/YankRing.vim'
Plug 'Shougo/neocomplcache.vim'
Plug 'kien/ctrlp.vim'
Plug 'barretren/LeaderF'
Plug 'barretren/vim-colorscheme'
Plug 'barretren/SearchOnSelectVim'
```


### 基本快捷键
| 按键 | 含义 |
| --- | :--- |
| F2 | 关闭当前buffer |
| F3 | 退出vim |
| F4 | 保存文件 |
| F5 | 打开文件浏览器 |
| F6 | 打开tagbar |
| F7 | 查找光标位置的词语 |
| F8 | 替换光标位置的词语 |
| F11 | 开关代码缩进线 |
| F12 | 打开文件历史记录 |
| w  v | 垂直分割当前窗口 |
| w  x | 水平分割当前窗口 |
| w  c | 关闭当前窗口 |
| l  n | 开关行号 |
| f  x | 打开quickfix窗口 |
| a  s | 调用AsyncRun执行异步操作 |
| t | vim中打开shell |
| b  u | 打开buffer list |
| f  u | 打开当前文件函数列表 |
| m | 标记光标下词语 |
| y  s | 打开剪切板，查看历史记录 |
| y  c | 清空剪切板 |
| Ctrl n | 新建buffer |
| Ctrl c | 复制 |
| Ctrl x | 剪切 |
| Ctrl v | 粘贴 |
| Ctrl a | 全选 |
| Ctrl \\ | 注释、反注释 |
| Ctrl p | 打开文件搜索 |
| Ctrl Shift - s | 搜索光标下变量名或函数名调用位置（需要gtags支持） |



### 其他

具体的配置请参照github库，很简单的.vimrc配置，都有中文注释，一看就懂了。

---

