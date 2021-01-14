(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{578:function(s,a,e){"use strict";e.r(a);var n=e(24),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("工作中需要对公司的es服务器进行配置，小白不敢直接在公司的开发机上直接修改。故需要在测试机上临时搭建一个es+kibana环境。")]),s._v(" "),e("p",[s._v("为了避开基础的环境问题和快速搭建，docker是我们非常好的伙伴")]),s._v(" "),e("h2",{attrs:{id:"elasticsearch安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch安装"}},[s._v("#")]),s._v(" elasticsearch安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull elasticsearch:6.6.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建配置文件")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/elasticsearch.yml")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-cluster"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许任何端口访问")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("transport.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("启动容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("es -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" -v /etc/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml elasticsearch:6.6.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("ol",[e("li",[s._v("开放了9300端口")]),s._v(" "),e("li",[s._v("挂载配置文件：/usr/share/elasticsearch/config/elasticsearch.yml")])])]),s._v(" "),e("p",[s._v("查看容器是否启动，以及端口是否正常开放")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" \nCONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\nacc39c54a0d8        elasticsearch:6.6.1   "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/bin/dock…"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" hours ago        Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" hours         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9200-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("/tcp, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9300-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("/tcp   es\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("更加直观的判断是否启动成功的提示是，直接访问 "),e("code",[s._v("9200")]),s._v(" 端口号。成功的话，会返回如下信息。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 这里假设一个公网的ip   http://111.111.111.111:9200/\n{\n  "name" : "cWz9ZWm",\n  "cluster_name" : "elasticsearch",\n  "cluster_uuid" : "5v3SilrTQyCjjQO-a5heBA",\n  "version" : {\n    "number" : "6.2.4",\n    "build_hash" : "ccec39f",\n    "build_date" : "2018-04-12T20:37:28.497551Z",\n    "build_snapshot" : false,\n    "lucene_version" : "7.2.1",\n    "minimum_wire_compatibility_version" : "5.6.0",\n    "minimum_index_compatibility_version" : "5.0.0"\n  },\n  "tagline" : "You Know, for Search"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"kibana安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kibana安装"}},[s._v("#")]),s._v(" kibana安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull kibana:6.6.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接下来，如果我们手里没有kibana配置文件的信息的话，需要先从容器中copy一份过来。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 启动容器 temp\ndocker run -di -p 5601:5601 --name temp kibana:6.6.1\n\n# 创建文件夹存放配置文件\nmkdir -p /etc/kibana\n\n# 从容器中复制过来，注意配置文件地址是 /usr/share/kibana/config\ndocker cp temp:/usr/share/kibana/config /etc/kibana/config\n\n# 删除临时的temp文件，强制删除\ndocker container rm -f temp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("注意挂载的配置文件地址为： /usr/share/kibana/config")])]),s._v(" "),e("p",[s._v("修改本地配置文件")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/kibana/config/kibana.yml")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kibana\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许所有地址访问")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# elasticsearch的地址，注意这里我直接填写的公网ip。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有的教程里面填写elasticsearch，127.0.0.1，localhost 等")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker容器的网络问题是我的弱项，采用上述方案，需要在docker容器互联，网络方面有一定的知识，不然会出问题。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch.url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//111.111.111.111"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack.monitoring.ui.container.elasticsearch.enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("启动容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -di --name=kibana  -p 5601:5601 -v /etc/kibana/config:/usr/share/kibana/config kibana:6.6.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里开放了新的端口 5601")]),s._v(" "),e("p",[s._v("验证是否成功，直接访问  "),e("code",[s._v("http://111.111.111.111:5601")]),s._v(" 就可以看到如下界面")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200225110755.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[s._v("#")]),s._v(" 注意点")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("elasticsearch 和 kibana 的版本最好保持一致，这里我都使用了 6.6.1")])]),s._v(" "),e("li",[e("p",[s._v("elasticsearch 和 kibana 都是比较吃内存的家伙，所以如果你的服务器的内存少于4G，可能就会出很多问题。")])]),s._v(" "),e("li",[e("p",[s._v("kibana 端口可能会被封掉。注意你的服务器有没有打开 "),e("code",[s._v("5601")]),s._v(" 端口，若是没有的话，换一个端口映射即可。\n"),e("code",[s._v("-p 7899:5601")])])]),s._v(" "),e("li",[e("p",[s._v("配置修改后可能会需要重启服务/容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启/查看 服务状态")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" kibana restart/status\nsystemctl restart/status kibana\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器重启")]),s._v("\ndocker restart kibana\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[s._v("#")]),s._v(" TODO")]),s._v(" "),e("p",[s._v("如果是搭建ELK，我们可能还需要 Filebeat 和 Logstash 的配和，这些还要后续的进行搭建。\n"),e("code",[s._v("ELK")]),s._v(" 是好东西，只是太吃内存了。如果不是公司基本的项目，只是做的玩票性质的小服务，估计买服务器的开销就不小，所以我暂时不太会用 "),e("code",[s._v("ELK")]),s._v(" 搭建日志系统。")]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq1031893936/article/details/93798646",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker安装ELK"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);