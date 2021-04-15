/*
 * @Author: your name
 * @Date: 2021-01-11 21:03:00
 * @LastEditTime: 2021-04-15 22:33:35
 * @LastEditors: yanxu gong
 * @Description: 配置文件的入口
 * @FilePath: \blog\docs\.vuepress\config.js
 */
module.exports = {
  // 部署站点的基础路径
  base: "/blog/",
  // 标题
  title: "Yanxu Gong's Blog",
  // 描述
  description: "Personal blog based on Github Action + Vuepress",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: "@vuepress/theme-vue",
  themeConfig: {
    nav: [
      { text: "学习", link: "/study/" },
      { text: "摄影", link: "/photography/" },
      { text: "情感", link: "/emotion/" },
      { text: "关于", link: "/about" },
    ],
    sidebar: {
      "/study/": getStudySidebar("学习"),
    },
    lastUpdated: "上次更新",
    repo: "yanxugong/blog",
    docsRepo: "yanxugong/blog",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
  },
  plugins: [
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "YnxJNMMn7NNvJAsb3sm3W9zt-gzGzoHsz",
          appKey: "pcRqPx83lkAK7Kt0kIiujKJY",
          placeholder: "请输入...",
        },
      },
    ],
    ["@vuepress/back-to-top"],
  ],
};

function getStudySidebar(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        // JavaScript 基础
        "js-basis/you-do-not-konw-js",
        "js-basis/you-do-not-konw-js-down",
        "js-basis/variables-and-types",
        "js-basis/prototype-and-prototype-chain",
        "js-basis/scope-and-closure",
        "js-basis/implementation-mechanism",
        "js-basis/syntax-and-api",

        // CSS 基础

        // 框架
        "frame/deep-react-one",
        "frame/deep-react-two",

        // 网络
        "network/from-url-to-page-render",

        // 数据结构与算法
        "algorithm/linked-list",

        // 安全

        // 性能优化
        "performance-optimization/first-screen",

        // 工程化
        "engineering/vite",
        "engineering/webpack-loader",
        "engineering/webpack-plugin",
        "engineering/webpack-main",
        "engineering/webpack-hmr",

        // 服务端
        "server/go-getting-started",
      ],
    },
  ];
}
