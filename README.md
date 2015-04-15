
React Lite Dropdown
----

Dropdown Menu from Talk by Teambition.

### Demo and supposition

Demo http://teambition.github.io/react-lite-dropdown/

### Usage

```bash
npm i --save react-lite-dropdown
```

```coffee

React = require 'react'

require './demo.css'
require './style.css'

LiteDropdown = React.createFactory require 'react-ligte-dropdown'

div = React.createFactory 'div'

languages = 'CoffeeScript PureScript Elm CirruScript'.split(' ')

App = React.createClass
  displayName: 'page-app'

  getInitialState: ->
    lang: undefined

  onItemClick: (lang) ->
    @setState {lang}

  renderLanguages: ->
    console.log languages
    languages.map (lang) =>
      onClick = => @onItemClick lang
      div key: lang, className: 'item', onClick: onClick,
        lang

  render: ->
    LiteDropdown
      displayText: @state.lang
      defaultText: 'Click to select one'
      name: 'css-hook-demo'
      @renderLanguages()

PageApp = React.createFactory App

demo = document.querySelector '.demo'
React.render PageApp(), demo


```

### Develop

```text
npm i
```

Develop:

```bash
gulp html # regenerate index.html
webpack-dev-server --hot # enable live-reloading
```

Build:

```bash
gulp build
```

### License

MIT
