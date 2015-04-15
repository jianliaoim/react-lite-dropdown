
React = require 'react'

require './demo.css'
require './style.css'

LiteDropdown = React.createFactory require './dropdown'

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

