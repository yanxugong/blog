(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{395:function(t,v,_){"use strict";_.r(v);var e=_(25),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"说一说从-url-输入到页面呈现到底发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一说从-url-输入到页面呈现到底发生了什么"}},[t._v("#")]),t._v(" 说一说从 URL 输入到页面呈现到底发生了什么？")]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("这是面试过程中一道"),_("strong",[t._v("高频")]),t._v("考题。")]),t._v(" "),_("p",[t._v("从面试官的角度思考：")]),t._v(" "),_("ul",[_("li",[t._v("出现频繁，可能是因为面试官通常喜欢问一些考察"),_("strong",[t._v("可深可浅")]),t._v("的题目")]),t._v(" "),_("li",[t._v("很多面试管喜欢根据我们应聘者的考题回答中，甚至我们随口说到的知识点，"),_("strong",[t._v("继续追问")])])]),t._v(" "),_("p",[t._v("基本回答：")]),t._v(" "),_("ul",[_("li",[t._v("浏览器解析 URL 获取协议，主机，端口， path")]),t._v(" "),_("li",[t._v("浏览器获取主机 ip 地址")]),t._v(" "),_("li",[t._v("建立 TCP 连接，然后发送 HTTP 请求")]),t._v(" "),_("li",[t._v("服务器将响应报文通过 TCP 连接发送回浏览器，浏览器接收 HTTP 响应，根据资源类型决定如何处理（假设资源为 HTML 文档）")]),t._v(" "),_("li",[t._v("解析 HTML 文档，构件 DOM 树，下载资源，构造 CSSOM 树，执行 js 脚本，最后展现出来给用户")])]),t._v(" "),_("p",[t._v("如果应聘者只回答了上述步骤，很多"),_("strong",[t._v("关键步骤")]),t._v("（前端应该了解的知识点）没有提及，很有可能达不到面试官想要的回答效果。")]),t._v(" "),_("p",[t._v("笔者针对一些关键步骤，具体展开说明。让这道题成为我们面试考卷中的"),_("strong",[t._v("加分项")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"网络请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[t._v("#")]),t._v(" 网络请求")]),t._v(" "),_("h3",{attrs:{id:"构建请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建请求"}},[t._v("#")]),t._v(" 构建请求")]),t._v(" "),_("p",[t._v("浏览器会构建请求行：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("// 请求方法是 GET，路径为根路径，HTTP 协议版本为 1.1\nGET / HTTP/1.1\n")])])]),_("p",[t._v("然后根据 Cache-control 和 Expires 字段，检查强缓存，如果命中直接使用，否则进入下一步。关于强缓存，如果不清楚可以参考下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/27/171b945dfb35de4c?w=1059&h=1162&f=png&s=236754",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"dns-解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[t._v("#")]),t._v(" DNS 解析")]),t._v(" "),_("p",[t._v("由于我们输入的是域名，而数据包是通过 IP 地址传给对方的。因此我们需要得到域名对应的 IP 地址。这个过程需要依赖一个服务系统，这个系统将域名和 IP 一一映射，我们将这个系统就叫做 DNS（域名系统）。")]),t._v(" "),_("p",[t._v("DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务。得到具体 IP 的过程就是 DNS 解析。")]),t._v(" "),_("p",[t._v("DNS 是一个网络服务器，我们的域名解析简单来说就是在 DNS 上记录一条信息记录。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("例如 baidu.com 220.114.23.56（服务器外网IP地址）80（服务器端口号）\n")])])]),_("p",[t._v("浏览器通过域名去查询 URL 对应的 IP ：")]),t._v(" "),_("ul",[_("li",[t._v("浏览器缓存：浏览器会按照一定的频率缓存 DNS 记录")]),t._v(" "),_("li",[t._v("操作系统缓存：如果浏览器缓存中找不到需要的 DNS 记录，那就去操作系统中找")]),t._v(" "),_("li",[t._v("路由缓存：路由器也有 DNS 缓存")]),t._v(" "),_("li",[t._v("ISP 的 DNS 服务器：ISP 是互联网服务提供商( Internet Service Provider )的简称，ISP 有专门的 DNS 服务器应对 DNS 查询请求")]),t._v(" "),_("li",[t._v("根服务器：ISP 的 DNS 服务器还找不到的话，它就会向根服务器发出请求，进行递归查询（DNS 服务器先问根域名服务器 .com 域名服务器的 IP 地址，然后再问 .baidu 域名服务器，依次类推）")])]),t._v(" "),_("h3",{attrs:{id:"建立-tcp-连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立-tcp-连接"}},[t._v("#")]),t._v(" 建立 TCP 连接")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/26/171b6b4eb4726917?w=649&h=416&f=jpeg&s=43567",alt:""}})]),t._v(" "),_("p",[t._v("TCP 三次握手的过程如下：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("客户端发送一个带 SYN=1，Seq=X 的数据包到服务器端口")]),t._v("（第一次握手，由浏览器发起，告诉服务器我要发送请求了）")]),t._v(" "),_("li",[_("strong",[t._v("服务器发回一个带 SYN=1， ACK=X+1， Seq=Y 的响应包以示传达确认信息")]),t._v("（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）")]),t._v(" "),_("li",[_("strong",[t._v("客户端再回传一个带 ACK=Y+1， Seq=Z 的数据包，代表“握手结束”")]),t._v("（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）")])]),t._v(" "),_("p",[t._v("谢希仁著《计算机网络》中讲“三次握手”的目的是“"),_("strong",[t._v("为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误")]),t._v("”。")]),t._v(" "),_("h3",{attrs:{id:"发送-http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求"}},[t._v("#")]),t._v(" 发送 HTTP 请求")]),t._v(" "),_("p",[t._v("现在 TCP 连接建立完毕，浏览器可以和服务器开始通信，即开始发送 HTTP 请求。浏览器发 HTTP 请求要携带三样东西："),_("strong",[t._v("请求行")]),t._v("、"),_("strong",[t._v("请求头")]),t._v("和"),_("strong",[t._v("请求体")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/27/171bacc6bdaf0b44?w=759&h=267&f=webp&s=13738",alt:""}})]),t._v(" "),_("p",[t._v("1."),_("strong",[t._v("请求行")]),t._v("包含请求方法、URL、协议版本")]),t._v(" "),_("ul",[_("li",[t._v("请求方法包含 8 种：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS、TRACE")]),t._v(" "),_("li",[t._v("URL 即请求地址，由 <协议>：//<主机>：<端口>/<路径>?<参数> 组成")]),t._v(" "),_("li",[t._v("协议版本即 http 版本号")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("POST /user.html HTTP/1.1\n")])])]),_("p",[t._v("2."),_("strong",[t._v("请求头")]),t._v("包含请求的附加信息，由关键字/值对组成，如下")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("// 服务器可以接受的文件格式\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\n// 指定浏览器可以支持的 Web 服务器返回的内容压缩编码类型\nAccept-Encoding: gzip, deflate, br\n// 浏览器支持的语言\nAccept-Language: zh-CN,zh;q=0.9\n// 缓存机制\nCache-Control: no-cache\n// 是否需要持久连接\nConnection: keep-alive\n// 发送该请求域名下所有 Cookie 值到服务器\nCookie: /* 省略cookie信息 */\n// 指定请求的服务器的域名和端口号\nHost: www.baidu.com\nPragma: no-cache\nUpgrade-Insecure-Requests: 1\n// 用户代理 UA，包含发出请求的用户信息\nUser-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1\n\n")])])]),_("p",[t._v("3."),_("strong",[t._v("请求体")]),t._v("，可以承载多个请求参数的数据，包含回车符、换行符和请求数据，一般在 POST 方法下存在。")]),t._v(" "),_("h2",{attrs:{id:"网络响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络响应"}},[t._v("#")]),t._v(" 网络响应")]),t._v(" "),_("p",[t._v("跟请求部分类似，网络响应具有三个部分:"),_("strong",[t._v("响应行")]),t._v("、"),_("strong",[t._v("响应头")]),t._v("和"),_("strong",[t._v("响应体")]),t._v("。")]),t._v(" "),_("p",[t._v("1."),_("strong",[t._v("响应行")]),t._v("包含：协议版本，状态码，状态码描述")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("HTTP/1.1 200 OK\n")])])]),_("p",[t._v("状态码规则如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1xx：指示信息--表示请求已接收，继续处理")])]),t._v(" "),_("li",[_("p",[t._v("2xx：成功--表示请求已被成功接收、理解、接受")])]),t._v(" "),_("li",[_("p",[t._v("3xx：重定向--要完成请求必须进行更进一步的操作")])]),t._v(" "),_("li",[_("p",[t._v("4xx：客户端错误--请求有语法错误或请求无法实现")])]),t._v(" "),_("li",[_("p",[t._v("5xx：服务器端错误--服务器未能实现合法的请求")]),t._v(" "),_("p",[t._v("2."),_("strong",[t._v("响应头部")]),t._v("包含响应报文的附加信息，由 名/值 对组成，如下：")])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("// 缓存机制\nCache-Control: no-cache\nConnection: keep-alive\nContent-Encoding: gzip\n// 表示具体请求中的媒体类型信息，决定浏览器将以什么形式、什么编码读取这个文件\nContent-Type: text/html;charset=utf-8\n// 原始服务器消息发出的时间\nDate: Wed, 04 Dec 2019 12:29:13 GMT\n// Web 服务器软件名称\nServer: apache\n// 由服务器端向客户端发送 cookie\nSet-Cookie: rsv_i=f9a0SIItKqzv7kqgAAgphbGyRts3RwTg%2FLyU3Y5Eh5LwyfOOrAsvdezbay0QqkDqFZ0DfQXby4wXKT8Au8O7ZT9UuMsBq2k; path=/; domain=.baidu.com\n")])])]),_("p",[t._v("这里注意下 Set-Cookie 中关于"),_("strong",[t._v("网络安全")]),t._v("方面的两个值：HttpOnly、SameSite")]),t._v(" "),_("blockquote",[_("p",[t._v("设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由 Document.cookie 属性、XMLHttpRequest 和 Request APIs 进行访问，以防范跨站脚本攻击（XSS）。")])]),t._v(" "),_("blockquote",[_("p",[t._v("SameSite=Lax 允许服务器设定一则 cookie 不随着跨域请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（CSRF）。")])]),t._v(" "),_("p",[t._v("3."),_("strong",[t._v("响应主体")]),t._v("包含回车符、换行符和响应返回数据，并不是所有响应报文都有响应数据")]),t._v(" "),_("p",[t._v("响应完成之后要判断 Connection 字段，如果请求头或响应头中包含 Connection： Keep-Alive ，表示建立了持久连接，这样 TCP 连接会一直保持，之后请求统一站点的资源会复用这个连接。\n否则断开 TCP 连接, 请求-响应流程结束。")]),t._v(" "),_("p",[t._v("总结浏览器端的网络请求过程：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/27/171bae65706fd126?w=829&h=645&f=jpeg&s=29914",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"浏览器解析渲染页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析渲染页面"}},[t._v("#")]),t._v(" 浏览器解析渲染页面")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/26/171b5cf50c00398a?w=752&h=258&f=png&s=35640",alt:""}})]),t._v(" "),_("p",[t._v("浏览器解析渲染页面分为以下五个步骤：")]),t._v(" "),_("ul",[_("li",[t._v("根据 HTML 解析出 DOM 树")]),t._v(" "),_("li",[t._v("根据 CSS 解析生成 CSS 规则树")]),t._v(" "),_("li",[t._v("结合 DOM 树和 CSS 规则树，生成渲染树")]),t._v(" "),_("li",[t._v("根据渲染树计算每一个节点的信息")]),t._v(" "),_("li",[t._v("根据计算好的信息绘制页面")])]),t._v(" "),_("blockquote",[_("p",[t._v("回流时，以上流程会重新走一遍。重绘时，会重新计算样式，跳过中间步骤直接生成绘制列表。可见，重绘不一定导致回流，但回流一定发生了重绘。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/26/171b6bd66cc4ebf0?w=689&h=241&f=jpeg&s=14937",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"构建-dom-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[t._v("#")]),t._v(" 构建 DOM 树")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("HTML 语法定义")]),t._v(" "),_("p",[t._v("HTML 的词汇与句法定义在 w3c 组织创建的规范中。当前版本是 HTML4，HTML5 的工作正在进行中。")])]),t._v(" "),_("li",[_("p",[t._v("不是上下文无关语法")]),t._v(" "),_("p",[t._v("在对解析器的介绍中看到，语法可以用类似 BNF 的格式规范地定义。不幸的是所有常规解析器的讨论都不适用于 HTML （我提及它们并不是为了娱乐，它们可以用于解析 CSS 和 JavaScript ）。HTML 无法用解析器所需的上下文无关的语法来定义。过去 HTML 格式规范由 DTD (Document Type Definition) 来定义，但它不是一个上下文无关语法。")]),t._v(" "),_("p",[t._v("HTML 与 XML 相当接近。XML 有许多可用的解析器。HTML 还有一个 XML 变种叫 XHTML ，那么它们主要区别在哪里呢？区别在于 HTML 应用更加”宽容”，它容许你漏掉一些开始或结束标签等。它整个是一个“软”句法，不像 XML 那样严格死板。 总的来说这一看似细微的差别造成了两个不同的世界。一方面这使得 HTML 很流行，因为它包容你的错误，使网页作者的生活变得轻松。另一方面，它使编写语法格式变得困难。所以综合来说，HTML 解析并不简单，现成的上下文相关解析器搞不定，XML 解析器也不行。")])]),t._v(" "),_("li",[_("p",[t._v("解析算法")]),t._v(" "),_("ul",[_("li",[t._v("标记化")]),t._v(" "),_("li",[t._v("建树")])]),t._v(" "),_("p",[t._v("对应的两个过程就是分词和语法分析（参考"),_("a",{attrs:{href:"https://juejin.im/post/5e99b91f518825738d528492#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 编译的解析过程"),_("OutboundLink")],1),t._v("）。")]),t._v(" "),_("p",[t._v("这里举例重点介绍下 "),_("code",[t._v("HTML5")]),t._v(" 的"),_("strong",[t._v("容错机制")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用 "),_("code",[t._v("</br>")]),t._v(" 而不是 "),_("code",[t._v("<br>")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("if (t->isCloseTag(brTag) && m_document->inCompatMode()) {\n    reportError(MalformedBRError);\n    t->beginTag = true;\n}\n")])])]),_("p",[t._v("全部换为 "),_("code",[t._v("<br>")]),t._v(" 的形式。")])]),t._v(" "),_("li",[_("p",[t._v("表格离散")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<table>\n    <table>\n        <tr><td>inner table</td></tr>\n    </table>\n    <tr><td>outer table</td></tr>\n</table>\n")])])]),_("p",[t._v("WebKit 会自动转换为:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("<table>\n    <tr><td>outer table</td></tr>\n</table>\n<table>\n    <tr><td>inner table</td></tr>\n</table>\n")])])])]),t._v(" "),_("li",[_("p",[t._v("表单元素嵌套")]),t._v(" "),_("p",[t._v("这时候直接忽略里面的 "),_("code",[t._v("form")]),t._v(" 。")])])])])]),t._v(" "),_("h3",{attrs:{id:"样式计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[t._v("#")]),t._v(" 样式计算")]),t._v(" "),_("p",[t._v("CSS 样式来源一般为三种：")]),t._v(" "),_("ul",[_("li",[t._v("link 标签引用")]),t._v(" "),_("li",[t._v("style 标签中样式")]),t._v(" "),_("li",[t._v("元素内嵌 style 属性")])]),t._v(" "),_("h5",{attrs:{id:"格式化样式表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#格式化样式表"}},[t._v("#")]),t._v(" 格式化样式表")]),t._v(" "),_("p",[t._v("浏览器无法直接识别 CSS 样式文本，这里渲染引擎接收到 CSS 文本之后将其转化为一个结构话的对象，即 styleSheets 。")]),t._v(" "),_("p",[t._v("可以在浏览器控制台输入 "),_("code",[t._v("document.styleSheets")]),t._v(" 来查看这个最终结构（包含上述三种 CSS 来源）。")]),t._v(" "),_("h5",{attrs:{id:"标准化样式属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标准化样式属性"}},[t._v("#")]),t._v(" 标准化样式属性")]),t._v(" "),_("p",[t._v("有一些渲染引擎不容易直接理解的 CSS 样式数值，需要在计算样式之前将它们标准化。如："),_("code",[t._v("em")]),t._v(" -> "),_("code",[t._v("px")]),t._v("，"),_("code",[t._v("red")]),t._v(" -> "),_("code",[t._v("#ff0000")]),t._v("，"),_("code",[t._v("bold")]),t._v(" -> "),_("code",[t._v("700")]),t._v(" 等等。")]),t._v(" "),_("h5",{attrs:{id:"计算每个节点的具体样式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算每个节点的具体样式"}},[t._v("#")]),t._v(" 计算每个节点的具体样式")]),t._v(" "),_("p",[t._v("计算具体样式主要遵循两个规则："),_("strong",[t._v("继承")]),t._v("和"),_("strong",[t._v("层叠")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("继承：")]),t._v(" "),_("p",[t._v("每个子节点都会默认继承父节点的样式属性，如果父节点中没有找到，就采用浏览器默认样式，也叫 "),_("code",[t._v("UserAgent样式")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("层叠：\nCSS 的层叠性体现在，最终的样式取决与各个属性共同作用的结果。")])])]),t._v(" "),_("p",[t._v("计算完样式之后，所有样式值会被挂载到 "),_("code",[t._v("window.getComputedStyle")]),t._v(" 中，也就是可以通过 JS 获取计算后的样式。")]),t._v(" "),_("h3",{attrs:{id:"生成布局树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成布局树"}},[t._v("#")]),t._v(" 生成布局树")]),t._v(" "),_("p",[t._v("布局树生成主要分两部：")]),t._v(" "),_("ul",[_("li",[t._v("遍历生成的 DOM 树节点，并把它们添加到布局树中")]),t._v(" "),_("li",[t._v("计算布局树节点的坐标位置")])]),t._v(" "),_("blockquote",[_("p",[t._v("布局树只包含可见元素，对于 head 标签和设置了 display: none 的元素将不会被放入其中。")])]),t._v(" "),_("p",[t._v("如果想了解布局的细节，可以读一读人人 FED 团队的文章"),_("a",{attrs:{href:"https://www.rrfed.com/2017/02/26/chrome-layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 Chrome 源码看浏览器如何 layout 布局"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"构建图层树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建图层树"}},[t._v("#")]),t._v(" 构建图层树")]),t._v(" "),_("p",[t._v("这里分两种情况，一种是"),_("strong",[t._v("显式合成")]),t._v("，一种是"),_("strong",[t._v("隐式合成")]),t._v("。")]),t._v(" "),_("h5",{attrs:{id:"显式合成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显式合成"}},[t._v("#")]),t._v(" 显式合成")]),t._v(" "),_("p",[t._v("一、拥有"),_("strong",[t._v("层叠上下文")]),t._v("的节点")]),t._v(" "),_("p",[t._v("层叠上下文也基本上是有一些特定的 CSS 属性创建的，一般有以下情况：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("HTML 根元素本身就具有层叠上下文")])]),t._v(" "),_("li",[_("p",[t._v("普通元素设置 position 不为 static 并且设置了 z-index 属性，会产生层叠上下文")])]),t._v(" "),_("li",[_("p",[t._v("元素的 opacity 值不是 1")])]),t._v(" "),_("li",[_("p",[t._v("元素的 transform 值不是 none")])]),t._v(" "),_("li",[_("p",[t._v("元素的 filter 值不是 none")])]),t._v(" "),_("li",[_("p",[t._v("元素的 isolation 值是 isolate")])]),t._v(" "),_("li",[_("p",[t._v("will-change 指定的属性值为上面任意一个")])])]),t._v(" "),_("p",[t._v("二、需要"),_("strong",[t._v("剪裁")]),t._v("的地方")]),t._v(" "),_("p",[t._v("比如一个 div，你只给他设置 100 * 100 像素的大小，而你在里面放了非常多的文字，那么超出的文字部分就需要被剪裁。当然如果出现了滚动条，那么滚动条会被单独提升为一个图层。")]),t._v(" "),_("h5",{attrs:{id:"隐式合成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#隐式合成"}},[t._v("#")]),t._v(" 隐式合成")]),t._v(" "),_("p",[t._v("简单说就是层叠等级低的节点被提升为单独的图层之后，那么所有层叠等级比它高的节点都会成为一个单独的图层。")]),t._v(" "),_("p",[t._v("这个隐式合成其实隐藏着巨大风险，如果在一个大型应用中，当一个 z-index 比较低的元素被提升为单独图层之后，层叠在它上面的元素统统会被提升为单独的图层，可能会增加上千个图层，大大增加内存压力，甚至直接让页面崩溃。这就是"),_("strong",[t._v("层爆炸")]),t._v("的原理")]),t._v(" "),_("blockquote",[_("p",[t._v("当需要 repaint 时，只需要 repaint 本身，而不会影响到其他层。")])]),t._v(" "),_("h3",{attrs:{id:"生成绘制列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成绘制列表"}},[t._v("#")]),t._v(" 生成绘制列表")]),t._v(" "),_("p",[t._v("渲染引擎会将图层的绘制拆分成一个个绘制指令，比如先画背景、再描绘边框......然后将这些指令按顺序组合成一个待绘制列表。")]),t._v(" "),_("p",[t._v("大家可以 "),_("code",[t._v("F12")]),t._v(" 打开 Chrome 开发者工具，在设置栏展开 "),_("code",[t._v("more tools")]),t._v(" ，然后选择 "),_("code",[t._v("Layers")]),t._v(" 面板，就能看到绘制列表了。")]),t._v(" "),_("p",[t._v("后面就是渲染进程的主线程把绘制列表提交给合成线程。然后合成线程选择视口附近的图块，把它交给"),_("strong",[t._v("栅格化线程池")]),t._v("生成位图。")]),t._v(" "),_("p",[t._v("栅格化操作完成后，"),_("strong",[t._v("合成线程")]),t._v("会生成一个绘制指令 "),_("code",[t._v("DrawQuad")]),t._v("，并发送给浏览器进程。浏览器进程中的 "),_("code",[t._v("viz 组件")]),t._v(" 接收到命令，把页面内容绘制到内存，也就是生成了页面。")]),t._v(" "),_("h2",{attrs:{id:"断开连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[t._v("#")]),t._v(" 断开连接")]),t._v(" "),_("p",[t._v("当数据传送完毕，需要断开 TCP 连接，此时发起四次挥手。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/26/171b4b37a6e26aa9?w=679&h=410&f=jpeg&s=56109",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("发起方往被动方发送报文，Fin、Ack、Seq，表示已经没有数据传输了。并进入 FIN_WAIT_1 状态。（请求报文发送完成）")]),t._v(" "),_("li",[t._v("被动方发送报文，Ack、Seq，表示同意关闭请求。此时主机发起方进入 FIN_WAIT_2 状态。(请求报文接受完成)")]),t._v(" "),_("li",[t._v("被动方向发起方发送报文段，Fin、Ack、Seq，请求关闭连接。并进入 LAST_ACK 状态。(响应报文发送完成)")]),t._v(" "),_("li",[t._v("发起方向被动方发送报文段，Ack、Seq。然后进入等待 TIME_WAIT 状态。被动方收到发起方的报文段以后关闭连接。发起方等待一定时间未收到回复，则正常关闭。(响应报文接受完成）")])]),t._v(" "),_("h2",{attrs:{id:"参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000017184701",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 URL 输入到页面展现到底发生什么？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69",target:"_blank",rel:"noopener noreferrer"}},[t._v("(1.6w 字)浏览器灵魂之问，请问你能接得住几个？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5d4cd42a6fb9a06aea618155",target:"_blank",rel:"noopener noreferrer"}},[t._v("大揭秘！“恐怖”的阿里一面，我究竟想问什么"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"感谢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),_("p",[t._v("如果本文对你有帮助，就点个 "),_("a",{attrs:{href:"https://github.com/yanxugong/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),_("OutboundLink")],1),t._v(" 支持下吧！感谢阅读。")])])}),[],!1,null,null,null);v.default=a.exports}}]);