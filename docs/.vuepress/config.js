/*
 * @Author: your name
 * @Date: 2021-01-11 21:03:00
 * @LastEditTime: 2021-02-28 22:29:20
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
};

function getStudySidebar(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        "js-basis/you-do-not-konw-js",
        "js-basis/you-do-not-konw-js-down",
        "frame/deep-react-one",
        "frame/deep-react-two",
        "network/from-url-to-page-render",
        "engineering/webpack-loader",
        "engineering/webpack-plugin",
        "engineering/webpack-main",
        "engineering/webpack-hmr",
        "server/go-getting-started",
      ],
    },
  ];
}
