(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{608:function(s,t,a){"use strict";a.r(t);var e=a(24),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文介绍，如何在 mac 系统下配置一个 无图形化的 centos 环境，难点在于网络配置")]),s._v(" "),a("p",[s._v("教程参考:  "),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1bA411b7vs",target:"_blank",rel:"noopener noreferrer"}},[s._v("个人专属多节点Linux环境打造，Linux操作系统学习实验环境安装配置视频教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("用到的工具")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("centos 系统")]),s._v(" "),a("blockquote",[a("p",[s._v("阿里云站点: http://mirrors.aliyun.com/centos/7/isos/x86_64/")]),s._v(" "),a("p",[s._v("各个版本的ISO镜像文件说明：")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-DVD-1708.iso        标准安装版（推荐）")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-Everything-1708.iso    完整版，集成所有软件（以用来补充系统的软件或者填充本地镜像）")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-LiveGNOME-1708.iso     GNOME桌面版")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-LiveKDE-1708.iso      KDE桌面版")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-Minimal-1708.iso      精简版，自带的软件最少")]),s._v(" "),a("p",[s._v("CentOS-7-x86_64-NetInstall-1708.iso    网络安装版（从网络安装或者救援系统）")]),s._v(" "),a("p",[s._v("作者：Ada54\n链接：https://www.jianshu.com/p/a63f47e096e8")])]),s._v(" "),a("p",[s._v("这里 "),a("code",[s._v("CentOS-7-x86_64-DVD-1708.iso")]),s._v(" 是标准安装版，如果选择最小安装，和 "),a("code",[s._v("CentOS-7-x86_64-Minimal-1708.iso")]),s._v(" (无界面版本)一样。")])]),s._v(" "),a("li",[a("p",[s._v("vmware 或者 virtualbox")])]),s._v(" "),a("li",[a("p",[s._v("finalShell/terminal")])])]),s._v(" "),a("p",[s._v("安装完 Linux 后的网络是默认不通的，为了使网络连通")]),s._v(" "),a("h2",{attrs:{id:"设置桥接模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置桥接模式"}},[s._v("#")]),s._v(" 设置桥接模式")]),s._v(" "),a("p",[s._v("在虚拟机挂机的情况下")]),s._v(" "),a("blockquote",[a("p",[s._v("虚拟机 -> 网络适配器 -> 桥接模式 -> 勾选 Wi-Fi 模式")])]),s._v(" "),a("p",[s._v("勾选完毕后，我们就可以看到 IP 和 子网 掩码，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200519012620.png",alt:""}})]),s._v(" "),a("p",[s._v("这个 ip 和 子网掩码 同样也是 "),a("code",[s._v("宿主机")]),s._v(" 的 ip 和 子网掩码")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200519013251.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"分配静态地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分配静态地址"}},[s._v("#")]),s._v(" 分配静态地址")]),s._v(" "),a("p",[s._v("由于虚拟机默认的是走的 DHCP，我们需要主动请求去获取 ip 地址。我们在使用虚拟机的时候肯定是希望一个固定的 ip。")]),s._v(" "),a("p",[s._v("利用 "),a("code",[s._v("dhclient")]),s._v(" 命令可以主动向 DHCP 服务器获取一个 ip 地址")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dhclient")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip addr")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" \n       valid_lft forever preferred_lft forever\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": ens33: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:0c:29:45:4d:90 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.8/24 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.255 scope global noprefixroute ens33\n       valid_lft forever preferred_lft forever\n    inet6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2409")]),s._v(":8a1e:5e7a:f280:c9ed:976f:94f1:9901/64 scope global noprefixroute dynamic \n       valid_lft 209430sec preferred_lft 123030sec\n    inet6 fe80::9f8c:26f6:3c23:c4d3/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" noprefixroute \n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("我们获得了一个 ip 地址 "),a("code",[s._v("192.168.1.8")])]),s._v(" "),a("h2",{attrs:{id:"设置固定-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置固定-ip"}},[s._v("#")]),s._v(" 设置固定 ip")]),s._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("如果你上面的静态 ip 没有主动分配的话，直接在本小节中修改配置也是可以的。\n但是这样做的话，你需要设置一个比较大的 ip，如 192.168.0.20。这是因为在同一个局域网下，可能有别的设备（手机，平板）占用了某个 ip 地址，你需要去避开这一点。")]),s._v(" "),a("li",[s._v("需要切换成 root 账号去操作")])])]),s._v(" "),a("h3",{attrs:{id:"配置文件修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件修改"}},[s._v("#")]),s._v(" 配置文件修改")]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("# vi /etc/sysconfig/network-scripts/ifcfg-ens33 \nTYPE=Ethernet\nPROXY_METHOD=none \nBROWSER_ONLY=no\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" BOOTPROTO=dhcp\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" BOOTPROTO=static # 默认是 dhcp\n")])]),s._v("DEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens33\nUUID=5bf952f3-8b37-4ded-b5bc-79ce0676e69d\nDEVICE=ens33\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ONBOOT=no # 默认是no\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ONBOOT=yes # 默认是no\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" IPADDR=192.168.1.8 # 填写刚刚分配给我们的 ip地址\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" NETMASK=255.255.255.0 # 填写刚刚查到的 子网掩码\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" GATEWAY=192.168.1.1 # 子网掩码 + ip 可得\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" DNS1=192.168.1.1 # 这里填写的 mac 上的 dns 服务器 mac->网络偏好设置->高级->DNS 可以查到\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"dns服务器地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns服务器地址"}},[s._v("#")]),s._v(" DNS服务器地址")]),s._v(" "),a("p",[s._v("打开【系统偏好设置】-【网络】- 选中【Wi-Fi】项（如果您是WIFI上网请选择此项）- 点右侧【高级】\n选择【TCP/IP】选项卡，记录好【子网掩码】、【路由器】地址、DNS选项卡下的DNS服务器地址（如果DNS服务器地址没有配置，也可以给配置个8.8.8.8）")]),s._v(" "),a("h2",{attrs:{id:"网络重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络重启"}},[s._v("#")]),s._v(" 网络重启")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" systemctl restart network.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看是否连通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看是否连通"}},[s._v("#")]),s._v(" 查看是否连通")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nPING www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.3")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.2")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.152")]),s._v(".44.95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65.8")]),s._v(" ms\n^C\n--- www.a.shifen.com "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" 2003ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.281")]),s._v("/29.502/65.882/25.724 ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"有界面版如果切换成无界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有界面版如果切换成无界面"}},[s._v("#")]),s._v(" 有界面版如果切换成无界面")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ systemctl set-default multi-user.target "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("关闭图形界面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行以后,输入命令 reboot 重启机器就可以")]),s._v("\n$ systemctl set-default graphical.target "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("开启图形界面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行以后,输入命令 reboot 重启机器就可以")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[s._v("https://segmentfault.com/a/1190000015227575")])])}),[],!1,null,null,null);t.default=n.exports}}]);