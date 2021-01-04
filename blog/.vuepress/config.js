/*
 * @Author: yanxu gong
 * @Date: 2020-12-31 18:32:00
 * @LastEditors: yanxu gong
 * @LastEditTime: 2021-01-04 14:30:14
 * @Description:
 */

const path = require("path");
module.exports = (options, context, api) => {
  return {
    title: "Yanxu Gong",
    description: "Web development, Frontend, JavaScript",
    theme: "@vuepress/blog",
    base: "blog",
    plugins: [
      [
        "@vuepress/google-analytics",
        {
          ga: process.env.GA,
        },
      ],
    ],
    themeConfig: {
      directories: [
        {
          id: "zh",
          dirname: "_zh",
          title: "貼文",
          path: "/zh/",
          itemPermalink: "/zh/:year/:month/:day/:slug",
        },
        {
          id: "en",
          dirname: "_en",
          title: "Post",
          path: "/en/",
          itemPermalink: "/en/:year/:month/:day/:slug",
        },
      ],
      sitemap: {
        hostname: "https://yanxugong.github.io/blog/",
      },
      comment: {
        service: "vssue",
        autoCreateIssue: true,
        prefix: "[Post]",
        owner: "newsbielt703",
        repo: "billy",
        clientId: "4119e8c1b0093fc5d034",
        clientSecret: "1ac1176791689b1ca31037c39489fc7b0667015d",
      },
      newsletter: {
        endpoint:
          "https://gmail.us5.list-manage.com/subscribe/post?u=942c0d587f8ea28269e80d6cd&amp;id=d77d789d53",
      },
      feed: {
        canonical_base: "https://yanxugong.github.io/blog/",
        posts_directories: ["/_en/"],
      },
      nav: [
        {
          text: "部落格",
          link: "/zh/",
        },
        {
          text: "Blog",
          link: "/en/",
        },
        {
          text: "Github",
          link: "https://github.com/yanxugong",
        },
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/yanxugong",
          },
          {
            type: "mail",
            link: "mailto:745710524@qq.com",
          },
        ],
        copyright: [
          {
            text: "Yanxu Gong © 2021",
            link: "",
          },
        ],
      },
      smoothScroll: true,
    },
    alias: {
      "@assets": path.resolve(__dirname, "../assets"),
    },
  };
};
