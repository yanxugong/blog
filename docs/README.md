---
home: true
heroImage: /img/bg.jpg
heroText: Yanxu Gong's Blog
tagline: 🌈 好时光都该被宝贝因为有限 🛫
actionText: 开始 →
actionLink: /study/
features:
  - title: 学习
    details: 学习必须与实干相结合。
  - title: 摄影
    details: 光观察还不够，我们要去感觉拍摄的对象。
  - title: 情感
    details: 我们对于情感的理解愈多，则我们愈能控制情感，而心灵感受情感的痛苦也愈少。
footer: MIT Licensed | Copyright © 2021-present Yanxu Gong
---

## 今天我学到了

> 日拱一卒，功不唐捐。
> 一起来分享下今天听到的有意思的事情，或者学习的冷知识。

### Git 操作实践

```shell
// 回退到指定版本
git reset --hard 「某次 commit 的 ID」
git push -f -u origin 「分支名称」
```

```shell
// 拉新分支
git checkout -b 「分支名称」
git push origin 「分支名称」
git push --set-upstream origin 「分支名称」
```

```shell
// 分支 1 合并到分支 2
git checkout 「分支 2 」
git merge「分支 1 」
```

```shell
// 删除分支
git branch -D 「分支名称」
git push origin --delete 「分支名称」
```

### Yarn 与 Npm 命令对比

```shell
// 初始化
npm init
yarn init
```

```shell
// 安装依赖包
npm i | install
yarn (install)
```

```shell
// 安装生产依赖并保存包名
npm i 「依赖名称」 --S | --save
yarn add「依赖名称」
```

```shell
// 安装开发依赖并保存包名
npm i 「依赖名称」--D | --save-dev
yarn add 「依赖名称」-D
```

```shell
// 删除依赖包
npm un | uninstall 「依赖名称」
yarn remove「依赖名称」
```

```shell
// 全局安装
npm i -g | npm -g i「依赖名称」
yarn global add「依赖名称」
```

```shell
// 全局移除
npm un -g 「依赖名称」
yarn global remove「依赖名称」
```

```shell
// 运行命令
npm run dev
yarn dev | run dev
```
