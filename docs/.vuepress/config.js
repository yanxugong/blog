/*
 * @Author: your name
 * @Date: 2021-01-11 21:03:00
 * @LastEditTime: 2021-02-28 17:00:22
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
    sidebar: "auto",
    repo: "yanxugong/blog",
  },
};
