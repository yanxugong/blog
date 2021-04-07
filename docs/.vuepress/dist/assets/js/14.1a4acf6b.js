(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{384:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"「webpack-核心特性」工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「webpack-核心特性」工作原理"}},[e._v("#")]),e._v(" 「webpack 核心特性」工作原理")]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("在搬砖过程中，webpack 常见的问题我们都能解决。")]),e._v(" "),t("p",[e._v("但当在实战中遇到很特殊的需求或者社区、webpack issues 中找不到解决方案时，我们就需要自己手写 "),t("a",{attrs:{href:"https://juejin.cn/post/6916315177411411981",target:"_blank",rel:"noopener noreferrer"}},[e._v("loader"),t("OutboundLink")],1),e._v(" 、手写 "),t("a",{attrs:{href:"https://juejin.cn/post/6922965817638256653",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugin"),t("OutboundLink")],1),e._v(" 和了解 webpack 的工作原理了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fde1c3fbc839435db238aec796abad70~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("p",[e._v("本文从几个面试管常问的问题，介绍 webpack 的工作原理。让我们对 webpack 有更深的认识，使用它时更加得心应手。")]),e._v(" "),t("h2",{attrs:{id:"webpack-的构建流程是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的构建流程是什么"}},[e._v("#")]),e._v(" webpack 的构建流程是什么？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9daa12cc07e04be18bfca8e4d5227374~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("初始化参数")]),e._v("：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数，形成最后的配置结果；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("开始编译")]),e._v("：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("确定入口")]),e._v("：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("编译模块")]),e._v("：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("完成模块编译并输出")]),e._v("：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk ；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("输出完成")]),e._v("：输出所有的 chunk 到文件系统；")])])]),e._v(" "),t("blockquote",[t("p",[e._v("温馨提示：在构建生命周期中有一系列插件在做合适的时机做合适事情，比如 UglifyPlugin 会在 loader 转换递归完对结果使用 UglifyJs 压缩覆盖之前的结果。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df6e7d41fbc6407baac96d98214ba592~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"什么是-webpack-事件流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-webpack-事件流"}},[e._v("#")]),e._v(" 什么是 webpack 事件流？")]),e._v(" "),t("p",[e._v("webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。")]),e._v(" "),t("p",[e._v("webpack 通过 tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。")]),e._v(" "),t("p",[e._v("--吴浩麟《深入浅出 webpack》")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f964a40be7f47d3bb86f9632e78ec66~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"能详细描述一下-webpack-的运行流程吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能详细描述一下-webpack-的运行流程吗"}},[e._v("#")]),e._v(" 能详细描述一下 webpack 的运行流程吗？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/573cf055e1f54649b7e4bd0066880b3b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("ol",[t("li",[e._v("调用 "),t("code",[e._v("webpack")]),e._v(" 函数接收 "),t("code",[e._v("config")]),e._v(" 配置信息，并初始化 "),t("code",[e._v("compiler")]),e._v("，在此期间会 "),t("code",[e._v("apply")]),e._v(" 所有 "),t("code",[e._v("webpack")]),e._v(" 内置的插件;")]),e._v(" "),t("li",[e._v("调用 "),t("code",[e._v("compiler.run")]),e._v(" 进入模块编译阶段；")]),e._v(" "),t("li",[e._v("每一次新的编译都会实例化一个 "),t("code",[e._v("compilation")]),e._v(" 对象，记录本次编译的基本信息；")]),e._v(" "),t("li",[e._v("进入 "),t("code",[e._v("make")]),e._v(" 阶段，即触发 "),t("code",[e._v("compilation.hooks.make")]),e._v(" 钩子，从 "),t("code",[e._v("entry")]),e._v(" 为入口：a. 调用合适的 "),t("code",[e._v("loader")]),e._v(" 对模块源码预处理，转换为标准的 JS 模块；b. 调用第三方插件 "),t("code",[e._v("acorn")]),e._v(" 对标准 JS 模块进行分析，收集模块依赖项。同时也会继续递归每个依赖项，收集依赖项的依赖项信息，不断递归下去；最终会得到一颗依赖树；")]),e._v(" "),t("li",[e._v("最后调用 "),t("code",[e._v("compilation.seal")]),e._v(" render 模块，整合各个依赖项，最后输出一个或多个 "),t("code",[e._v("chunk")]),e._v("；")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1a0f79f9e864fa8b33bdb1fa7c3765e~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"你知道如何优化-webpack-的构建性能吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你知道如何优化-webpack-的构建性能吗"}},[e._v("#")]),e._v(" 你知道如何优化 webpack 的构建性能吗？")]),e._v(" "),t("h3",{attrs:{id:"通用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用"}},[e._v("#")]),e._v(" 通用")]),e._v(" "),t("p",[e._v("适用于 "),t("code",[e._v("development")]),e._v(" 或 "),t("code",[e._v("production")])]),e._v(" "),t("h4",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[e._v("#")]),e._v(" 版本")]),e._v(" "),t("p",[e._v("使用最新版 webpack 和 nodejs")]),e._v(" "),t("h4",{attrs:{id:"缩小-loaders-作用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缩小-loaders-作用范围"}},[e._v("#")]),e._v(" 缩小 loaders 作用范围")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("include")]),e._v(" 字段仅将 loader 模块应用在实际需要用其转换的位置中：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  test"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\.js$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  include"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"babel-loader"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h4",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[e._v("#")]),e._v(" 解析")]),e._v(" "),t("ul",[t("li",[e._v("尽量减少 "),t("code",[e._v("resolve.modules")]),e._v(", "),t("code",[e._v("resolve.extensions")]),e._v(", "),t("code",[e._v("resolve.mainFiles")]),e._v(", "),t("code",[e._v("resolve.descriptionFiles")]),e._v(" 中类目的数量，因为他们会增加文件系统调用的次数。")]),e._v(" "),t("li",[e._v("如果你不使用 symlinks ，可以设置 "),t("code",[e._v("resolve.symlinks: false")]),e._v(" (例如 "),t("code",[e._v("npm link")]),e._v(" 或者 "),t("code",[e._v("yarn link")]),e._v(").")]),e._v(" "),t("li",[e._v("如果你使用自定义解析 plugins ，并且没有指定 context 信息，可以设置 "),t("code",[e._v("resolve.cacheWithContext: false")]),e._v(" 。")])]),e._v(" "),t("h4",{attrs:{id:"dlls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dlls"}},[e._v("#")]),e._v(" Dlls")]),e._v(" "),t("p",[e._v("使用 DllPlugin 将不频繁更新的代码单独编译。")]),e._v(" "),t("h4",{attrs:{id:"减少编译的整体大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少编译的整体大小"}},[e._v("#")]),e._v(" 减少编译的整体大小")]),e._v(" "),t("ul",[t("li",[e._v("使用 更少/更小 的库。")]),e._v(" "),t("li",[e._v("在多页面应用程序中使用 "),t("code",[e._v("CommonsChunksPlugin")]),e._v("。")]),e._v(" "),t("li",[e._v("在多页面应用程序中以 "),t("code",[e._v("async")]),e._v(" 模式使用 "),t("code",[e._v("CommonsChunksPlugin")]),e._v(" 。")]),e._v(" "),t("li",[e._v("移除不使用的代码。")]),e._v(" "),t("li",[e._v("只编译你当前正在开发部分的代码。")])]),e._v(" "),t("h3",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[e._v("#")]),e._v(" 开发环境")]),e._v(" "),t("p",[e._v("适用于 "),t("code",[e._v("development")])]),e._v(" "),t("h4",{attrs:{id:"在内存中编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在内存中编译"}},[e._v("#")]),e._v(" 在内存中编译")]),e._v(" "),t("p",[e._v("以下几个实用工具通过在内存中进行代码的编译和资源的提供，但并不写入磁盘来提高性能:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("webpack-dev-server")])]),e._v(" "),t("li",[t("code",[e._v("webpack-hot-middleware")])]),e._v(" "),t("li",[t("code",[e._v("webpack-dev-middleware")])])]),e._v(" "),t("h4",{attrs:{id:"排除生产环境下才用到的工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排除生产环境下才用到的工具"}},[e._v("#")]),e._v(" 排除生产环境下才用到的工具")]),e._v(" "),t("p",[e._v("某些实用工具， plugins 和 loaders 都只能在构建生产环境时才有用。例如，在开发时使用 "),t("code",[e._v("UglifyJsPlugin")]),e._v(" 来压缩和修改代码是没有意义的。以下这些工具在开发中通常被排除在外:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("UglifyJsPlugin")])]),e._v(" "),t("li",[t("code",[e._v("ExtractTextPlugin")])]),e._v(" "),t("li",[t("code",[e._v("[hash]/[chunkhash]")])]),e._v(" "),t("li",[t("code",[e._v("AggressiveSplittingPlugin")])]),e._v(" "),t("li",[t("code",[e._v("AggressiveMergingPlugin")])]),e._v(" "),t("li",[t("code",[e._v("ModuleConcatenationPlugin")])])]),e._v(" "),t("h3",{attrs:{id:"生产环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[e._v("#")]),e._v(" 生产环境")]),e._v(" "),t("p",[e._v("适用于 "),t("code",[e._v("production")])]),e._v(" "),t("h4",{attrs:{id:"并行构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行构建"}},[e._v("#")]),e._v(" 并行构建")]),e._v(" "),t("p",[e._v("当进行多个编译时，以下工具可以帮助到你:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("parallel-webpack")]),e._v(": 它允许编译工作在 worker 池中进行。")]),e._v(" "),t("li",[t("code",[e._v("cache-loader")]),e._v(": 缓存可以在多个编译时之间共享。")])]),e._v(" "),t("h2",{attrs:{id:"系列文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系列文章"}},[e._v("#")]),e._v(" 系列文章")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6916315177411411981",target:"_blank",rel:"noopener noreferrer"}},[e._v("「webpack 核心特性」loader"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6922965817638256653",target:"_blank",rel:"noopener noreferrer"}},[e._v("「webpack 核心特性」插件(plugin)"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("「webpack 核心特性」工作原理")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6870258201384714253",target:"_blank",rel:"noopener noreferrer"}},[e._v("「webpack 核心特性」模块热替换(HMR)"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcace55dbd7a4df5a428e938abfcfe8f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"感谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[e._v("#")]),e._v(" 感谢")]),e._v(" "),t("p",[e._v("如果本文对你有帮助 😘，就点个"),t("a",{attrs:{href:"https://github.com/yanxugong/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Star 👍"),t("OutboundLink")],1),e._v(" 支持下吧！感谢阅读。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a10ab9f539ae4a18a1262c6d273fa15f~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);a.default=s.exports}}]);