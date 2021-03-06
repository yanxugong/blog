# 深入 react 技术栈（一）

## 前言

目前，已经有很多大大小小的入门 React 的教程，它们会介绍一些**基本概念**和**用法**，那些内容可以让你方便地带你进入 React 世界。但这篇文章除了详细阐述基本概念外，还会帮助你从了解 React 到**熟悉**其**原理**。

> 温馨提示：由于本文偏熟悉原理，所以这里**适用对象**包括：对**react 原理**感兴趣但是还没入门的同学和**已经入坑 react**的同学。React 是一种思想，希望通过解读它，能够抛砖引玉，带来一些**好玩**的思考。

## 事件系统

### 合成事件的实现机制

在 React 底层，主要对合成事件做了两件事：事件委派和自动绑定。

#### 1. 事件委派

在使用 React 事件前，一定要熟悉它的事件代理机制。它并不会把事件处理函数直接绑定到真实的节点上，而是把所有事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升。

#### 2. 自动绑定

在 React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件。而且 React 还会对这种引用进行缓存，以达到 CPU 和内存的最优化。在使用 ES6 classes 或者纯函数时，这种自动绑定就不复存在了，我们需要手动实现 this 的绑定。

我们常用箭头函数来实现自动绑定操作。

```js
import React, { Component } from 'react';

class App extends Component {
  const handleClick = (e) => {
  	console.log(e);
  };

  render() {
  	return <button onClick={this.handleClick}>Test</button>;
  }
}
```

或

```js
import React, { Component } from "react";

class App extends Component {
  handleClick(e) {
    console.log(e);
  }

  render() {
    return <button onClick={() => this.handleClick()}>Test</button>;
  }
}
```

### 对比 React 合成事件与 JavaScript 原生事件

下面我们从 4 个方面来对比 React 合成事件与 JavaScript 原生事件。

#### 1. 事件传播与阻止事件传播

浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理程序调用以及事件冒泡。事件捕获会优先调用结构树最外层的元素上绑定的事件监听器，然后依次向内调用，一直调用到目标元素上的事件监听器为止。可以在将 e.addEventListener() 的第 3 个参数设置为 true 时，为元素 e 注册捕获事件处理程序，并且在事件传播的第一个阶段调用。此外，事件捕获并不是一个通用的技术，在低于 IE9 版本的浏览器中无法使用。而事件冒泡则与事件捕获的表现相反，它会从目标元素向外传播事件，由内而外直到最外层。

可以看出，事件捕获在程序开发中的意义并不大，更致命的是它的兼容性问题。所以，React 的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制。这种 API 设计方式统一而简洁，符合“二八原则”。

阻止原生事件传播需要使用 e.preventDefault() ，不过对于不支持该方法的浏览器（IE9 以下），只能使用 e.cancelBubble = true 来阻止。而在 React 合成事件中，只需要使用 e.prevent-Default() 即可。

#### 2. 事件类型

React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。

#### 3. 事件绑定方式

受到 DOM 标准的影响，绑定浏览器原生事件的方式也有很多种，具体如下所示。

- 直接在 DOM 元素中绑定：

  ```js
  <button onclick="alert(1);">Test</button>
  ```

- 在 JavaScript 中，通过为元素的事件属性赋值的方式实现绑定：

  ```js
  el.onclick = (e) => {
    console.log(e);
  };
  ```

- 通过事件监听函数来实现绑定：

  ```js
  el.addEventListener("click", () => {}, false);
  el.attachEvent("onclick", () => {});
  ```

相比而言，React 合成事件的绑定方式则简单得多：

```js
<button onClick={this.handleClick}>Test</button>
```

#### 4. 事件对象

原生 DOM 事件对象在 W3C 标准和 IE 标准下存在着差异。在低版本的 IE 浏览器中，只能使用 window.event 来获取事件对象。而在 React 合成事件系统中，不存在这种兼容性问题，在事件处理函数中可以得到一个合成事件对象。

## 样式处理

### CSS Modules

下面我们详细介绍一下 CSS Modules 。

#### 1. CSS 模块化遇到了哪些问题？

CSS 模块化重要的是解决好以下两个问题：CSS 样式的导入与导出。灵活按需导入以便复用代码，导出时要能够隐藏内部作用域，以免造成全局污染。Sass、Less、PostCSS 等试图解决 CSS 编程能力弱的问题，但这并没有解决模块化这个问题。Facebook 工程师 Vjeux 抛出了 React 开发中遇到的一系列 CSS 相关问题，结合实际开发的问题有以下几点。

- **全局污染**：CSS 使用全局选择器机制来设置样式，优点是方便重写样式。缺点是所有的样式都是全局生效，样式可能被错误覆盖，因此产生了非常丑陋的 !important ，甚至 inline !important 和复杂的[选择器权重计数表](https://www.w3.org/TR/selectors/#specificity)，提高犯错概率和使用成本。Web Components 标准中的 Shadow DOM 能彻底解决这个问题，但它把样式彻底局部化，造成外部无法重写样式，损失了灵活性。
- **命名混乱**：由于全局污染的问题，多人协同开发时为了避免样式冲突，选择器越来越复杂，容易形成不同的命名风格，很难统一。样式变多后，命名将更加混乱。
- **依赖管理不彻底**：组件应该相互独立，引入一个组件时，应该只引入它所需要的 CSS 样式。现在的做法是除了要引入 JavaScript，还要再引入它的 CSS，而且 Saas/Less 很难实现对每个组件都编译出单独的 CSS，引入所有模块的 CSS 又造成浪费。JavaScript 的模块化已经非常成熟，如果能让 JavaScript 来管理 CSS 依赖是很好的解决办法，而 webpack 的 css-loader 提供了这种能力。
- **无法共享变量**：复杂组件要使用 JavaScript 和 CSS 来共同处理样式，就会造成有些变量在 JavaScript 和 CSS 中冗余，而预编译语言不能提供跨 JavaScript 和 CSS 共享变量的这种能力。
- **代码压缩不彻底**：由于移动端网络的不确定性，现代工程项目对 CSS 压缩的要求已经到了变态的程度。很多压缩工具为了节省一个字节,会把 16px 转成 1pc ，但是这对非常长的类名却无能为力。

上述问题只凭 CSS 自身是无法解决的，如果通过 JavaScript 来管理 CSS，就很好解决。因此， Vjuex 给出的解决方案是完全的 [CSS in JS](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)，但这相当于完全抛弃 CSS，在 JavaScript 中以 hash 映射来写 CSS，但这种做法未免有些激进，直到出现了 CSS Modules。

#### 2. CSS Modules 模块化方案

CSS Modules 内部通过 ICSS 来解决样式导入和导出这两个问题，分别对应 :import 和 :export 两个新增的伪类：

```css
:import("path/to/dep.css") {
  localAlias: keyFromDep;
  /* ... */
}

:export {
  exportedKey: exportedValue;
  /* ... */
}
```

但直接使用这两个关键字编程太烦琐，项目中很少会直接使用它们，我们需要的是用 JavaScript 来管理 CSS 的能力。结合 webpack 的 css-loader，就可以在 CSS 中定义样式，在 JavaScript 文件中导入。

- 启用 CSS Modules

  启用 CSS Modules 的代码如下：
  // webpack.config.js
  css?modules&localIdentName=[name]\_\_[local]-[hash:base64:5]
  加上 modules 即为启用，其中 localIdentName 是设置生成样式的命名规则。

  > 用 create-react-app 构建项目的同学，npm run eject 可以弹出配置

  下面我们直接看看怎么引用 CSS，webpack 又是怎么转化 class 名的：

  ```css
  /* components/Button.css */
  .normal {
    /* normal 相关的所有样式 */
  }
  .disabled {
    /* disabled 相关的所有样式 */
  }
  ```

  将以上 CSS 保存好，然后用 import 的方法在 JavaScript 文件中引用：

  ```js
  /* components/Button.js */
  import styles from "./Button.css";

  console.log(styles);
  // =>
  // Object {
  // normal: 'button--normal-abc5436',
  // disabled: 'button--disabled-def884',
  // }

  buttonElem.outerHTML = `<button class=${styles.normal}>Submit</button>`;
  ```

  我们看到，最终生成的 HTML 是这样的：

  ```js
  <button class="button--normal-abc5436"> Processing... </button>
  ```

  注意到 button--normal-abc5436 是 CSS Modules 按照 localIdentName 自动生成的 class 名
  称，其中 abc5436 是按照给定算法生成的序列码。经过这样混淆处理后， class 的名称基本就是
  唯一的，大大降低了项目中样式覆盖的几率。同时在生产环境下修改规则，生成更短的 class 名，
  可以提高 CSS 的压缩率。

  CSS Modules 对 CSS 中的 class 名都做了处理，使用对象来保存原 class 和混淆后 class 的
  对应关系。通过这些简单的处理，CSS Modules 实现了以下几点：

  - 所有样式都是局部化的，解决了命名冲突和全局污染问题；
  - class 名的生成规则配置灵活，可以以此来压缩 class 名；
  - 只需引用组件的 JavaScript，就能搞定组件所有的 JavaScript 和 CSS；
  - 依然是 CSS，学习成本几乎为零。

- 样式默认局部

  使用了 CSS Modules 后，就相当于给每个 class 名外加了 :local ，以此来实现样式的局部化。
  如果我们想切换到全局模式，可以使用 :global 包裹。示例代码如下：

  ```css
  .normal {
    color: green;
  }

  /* 以上与下面等价 */
  :local(.normal) {
    color: green;
  }

  /* 定义全局样式 */
  :global(.btn) {
    color: red;
  }

  /* 定义多个全局样式 */
  :global {
    .link {
      color: green;
    }
    .box {
      color: yellow;
    }
  }
  ```

- 使用 composes 来组合样式

  对于样式复用，CSS Modules 只提供了唯一的方式来处理—— composes 组合。示例代码如下：

  ```js
  /* components/Button.css */
  .base { /* 所有通用的样式 */ }

  .normal {
    composes: base;
    /* normal 其他样式 */
  }

  .disabled {
    composes: base;
    /* disabled 其他样式 */
  }

  import styles from './Button.css';

  buttonElem.outerHTML = `<button class=${styles.normal}>Submit</button>`
  ```

  生成的 HTML 变为：

  ```html
  <button class="button--base-abc53 button--normal-abc53">Processing...</button>
  ```

  由于在 .normal 中组合了 .base，所以编译后的 normal 会变成两个 class。
  此外，使用 composes 还可以组合外部文件中的样式：

  ```css
  /* settings.css */
  .primary-color {
    color: #f40;
  }

  /* components/Button.css */
  .base {
    /* 所有通用的样式 */
  }
  .primary {
    composes: base;
    composes: $primary-color from "./settings.css";
    /* primary 其他样式 */
  }
  ```

  对于大多数项目，有了 composes 后，已经不再需要预编译处理器了。但如果想用的话，由于 composes 不是标准的 CSS 语法，编译时会报错，此时就只能使用预处理器自己的语法来做样式复用了。

- class 命名技巧

  CSS Modules 的命名规范是从 BEM 扩展而来的。BEM 把样式名分为 3 个级别，具体如下所示。

  - Block：对应模块名，如 Dialog。
  - Element：对应模块中的节点名 Confirm Button。
  - Modifier：对应节点相关的状态，如 disabled 和 highlight。

  BEM 最终得到的 class 名为 **dialog\_\_confirm-button--highlight**。使用双符号 \_\_ 和 -- 是为了与区块内单词间的分隔符区分开来。虽然看起来有些奇特，但 BEM 被非常多的大型项目采用。

  CSS Modules 中 CSS 文件名恰好对应 Block 名，只需要再考虑 Element 和 Modifier 即可。BEM 对应到 CSS Modules 的做法是：

  ```css
  /* .dialog.css */
  .ConfirmButton--disabled {
  }
  ```

  我们也可以不遵循完整的命名规范，使用小驼峰的写法把 Block 和 Modifier 放到一起：

  ```css
  /* .dialog.css */
  .disabledConfirmButton {
  }
  ```

- 实现 CSS 与 JavaScript 变量共享

  上面提到的 :export 关键字可以把 CSS 中的变量输出到 JavaScript 中，例如：

  ```js
  /* config.scss */
  $primary-color: #f40;

  :export {
   primaryColor: $primary-color;
  }

  /* app.js */
  import style from 'config.scss';

  // 会输出 #F40
  console.log(style.primaryColor);
  ```

#### 3. CSS Modules 使用技巧

CSS Modules 是对现有的 CSS 做减法。为了追求简单可控，作者建议遵循如下原则：

- 不使用选择器，只使用 class 名来定义样式；
- 不层叠多个 class，只使用一个 class 把所有样式定义好；
- 所有样式通过 composes 组合来实现复用；
- 不嵌套。

其中前两条原则相当于削弱了样式中最灵活的部分，初学者很难接受。第一条实践起来难度
不大，但第二条中模块状态过多时，class 数量将成倍上升。

上面之所以说“建议”，是因为 CSS Modules 并不强制我们一定要这么做。这听起来有些矛盾。由于多数 CSS 项目存在深厚的历史遗留问题，过多的限制就意味着增加迁移成本和与外部合作的成本。初期使用肯定需要一些折中。幸运的是，CSS Modules 这点做得很好。下面我们来列举一些常见问题。

(1) 如果我对一个元素使用多个 class 呢？

样式照样生效。

(2) 如果我在一个 style 文件中使用同名 class 呢？

这些同名 class 编译后虽然可能是随机码，但仍是同名的。

(3) 如果我在 style 文件中使用了 id 选择器、伪类和标签选择器等呢？

所有这些选择器将不被转换，原封不动地出现在编译后的 CSS 中。也就是说，CSS Modules 只会转换 class 名相关的样式。

#### 4. CSS Modules 结合历史遗留项目实践

好的技术方案除了功能强大、炫酷，还要能做到现有项目能平滑迁移，CSS Modules 在这一
点上表现得非常灵活。

- 外部如何覆盖局部样式

  当生成混淆的 class 名后，可以解决命名冲突，但因为无法预知最终的 class 名，不能通过一般选择器覆盖。我们现在在项目中的实践是可以给组件关键节点加上 data-role 属性，然后通过属性选择器来覆盖样式：

  ```js
  // dialog.js
  return (
    <div className={styles.root} data-role="dialog-root">
    <a className={styles.disabledConfirm} data-role="dialog-confirm-btn">Confirm</a>
    ...
    </div>
  );

  // dialog.css
  [data-role="dialog-root"] {
    // override style
  }
  ```

  因为 CSS Modules 只会转变类选择器，所以这里的属性选择器不需要添加 :global。

- 如何与全局样式共存

  前端项目不可避免地会引入 normalize.css 或其他一类全局 CSS 文件，使用 webpack 可以让全局样式和 CSS Modules 的局部样式和谐共存。下面是具体项目中使用的 webpack 部分配置代码：

  ```js
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, "src/styles"),
        loader:
          "style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true",
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/styles"),
        loader: "style!css!sass?sourceMap=true",
      },
    ];
  }

  /* src/app.js */
  import "./styles/app.scss";
  import Component from "./view/Component";

  /* src/views/Component.js */
  import "./Component.scss";
  ```

  目录结构如下：

  ```js
    src
    ├── app.js
    ├── styles
    │ ├── app.scss
    │ └── normalize.scss
    └── views
    ├── Component.js
    └── Component.scss
  ```

  这样所有全局的样式都放到 src/styles/app.scss 中引入就可以了，其他所有目录（包括 src/views）中的样式都是局部的。

  CSS Modules 很好地解决了 CSS 目前面临的模块化难题。支持与预编译语言搭配使用，能充分利用现有技术，同时也能和全局样式灵活搭配。CSS Modules 的实现也属轻量级，未来有标准解决方案后，可以低成本迁移。

#### 5. CSS Modules 结合 React 实践

在 className 处直接使用 CSS 中的 class 名即可：

```js
/* dialog.css */
.root {}
.confirm {}
.disabledConfirm {}

/* dialog.js */
import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './dialog.css';

class Dialog extends Component {
  render() {
    const cx = classNames({
      confirm: !this.state.disabled,
      disabledConfirm: this.state.disabled,
    });

    return (
      <div className={styles.root}>
      <a className={styles[cx]}>Confirm</a>
      ...
      </div>
    );
  }
}
```

注意，一般把组件最外层节点对应的 class 名称为 root。

React 本身处理样式与其他 View 库并没有太多区别，主要是直接操作样式或是操作 classname 间接操作样式的不同罢了。而与 CSS Modules 的深度结合可能是 React 的一大特点。想象一下 CSS 模块化的远景，我们离成熟的 Web 组件化梦想的道路越来越近了。

如果不想频繁地输入 **styles.\*\***，可以使用 react-css-modules 库。它通过高阶组件的形式来避免重复输入 **styles.\*\***。我们来重写上述例子：

```js
import React, { Component } from "react";
import classNames from "classnames";
import CSSModules from "react-css-modules";
import styles from "./dialog.css";

class Dialog extends Component {
  render() {
    const cx = classNames({
      confirm: !this.state.disabled,
      disabledConfirm: this.state.disabled,
    });

    return (
      <div styleName="root">
        <a styleName={cx}>Confirm</a>
        ...
      </div>
    );
  }
}

export default CSSModules(Dialog, styles);
```

此外，对比原始的 CSS Modules，有以下几个优点：

- 我们不用再关注是否使用驼峰来命名 class 名；
- 我们不用每一次使用 CSS Modules 的时候都关联 style 对象；
- 使用 CSS Modules，容易使用 :global 去解决特殊情况，使用 react-css-modules 可写成 `<div className="global-css" styleName="local-module"></div>`，这种形式轻松对应全局和局部；
- 当 styleName 关联了一个 undefined CSS Modules 时，我们会得到一个警告；
- 我们可以强迫使用单一的 CSS Modules。

## 参考文章

- [深入 react 技术栈](https://book.douban.com/subject/26918038/)

## 感谢

- 图片来源网络。
- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
