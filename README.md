
React Lite Dropdown
----

Dropdown component from Talk by Teambition.

Demo http://teambition.github.io/react-lite-dropdown/

### Properties

####Dropdown

* `displayText` `(string)`

Text to display when selected. You will get `is-chosen` in `className` of root element when it's specified.

* `defaultText` `(string.isRequired)`

Text to display when `displayText` is `undefined`.

* `name` `(string)`

CSS hook for this components, defaults to `default`. Suppose it's `x`, the generated `className` is `is-for-x`.

* `show` `(bool.isRequired)`

Defines whether `DropdownMenu` is shown or not

* `onToggle` `(func.isRequired)`

Things happened when toggle dropdown

* `this.props.children`

Content to render in the menu opened after clicked.

### Supposition

This component suppose you are using it in such scenarios:

* it looks like `<select>`, with default text and selected
* but you need to render arbitrary view, rather than list of items
* click events bubbles to `window` and menu is then closed

In chinese. 中文表达更明确一些, 这个组件做了一些假定, 使用需要注意:

* 基本界面类似 `<select>`, 有 选中/未选中 状态, 用 CSS hook 修改颜色
* 打开菜单具体界面不在 Component 中控制, 要以 `this.props.children` 传入
* 通过监听 window 的 click 事件关闭菜单, 注意不好截断

### Usage

```bash
npm i --save react-lite-dropdown
```

Read [src/main.jsx](main)(compiles with Babel) for details:

[main]: https://github.com/teambition/react-lite-dropdown/blob/gh-pages/src/main.jsx

```jsx
import {default as React} from 'react';
import './demo.css';

import {default as LiteDropdown} from 'react-lite-dropdown';
import 'react-lite-dropdown/src/style.css'; // CSS if you need

var languages = 'CoffeeScript PureScript Elm CirruScript'.split(' ');

var App = React.createClass({
  displayName: 'page-app',
  getInitialState: function() {
    return {
      lang: undefined
    };
  },
  onItemClick: function(lang) {
    return this.setState({
      lang: lang
    });
  },
  renderLanguages: function() {
    console.log(languages);
    var self = this;
    return languages.map(function(lang) {
      var onClick = function() {
        return self.onItemClick(lang);
      };
      return <div key={lang} className={'item'} onClick={onClick}>{lang}</div>;
    });
  },
  render: function() {
    return <LiteDropdown
      displayText={this.state.lang}
      defaultText={'Click to select one'}
      name={'css-hook-demo'}>{this.renderLanguages()}</LiteDropdown>
  }
});

var PageApp = React.createFactory(App);

var demo = document.querySelector('.demo');

React.render(PageApp(), demo);
```

### Develop

```text
npm i
```

You need a static file server for the HTML files. Personally I suggest using Nginx.

Develop:

```bash
gulp html # regenerate index.html
webpack-dev-server --hot # enable live-reloading
```

Build (Pack and optimize js, reivision js and add entry in `index.html`):

```bash
gulp build
```

### License

MIT
