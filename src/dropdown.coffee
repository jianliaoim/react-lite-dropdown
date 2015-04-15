
React = require 'react'
classnames = require 'classnames'

div = React.createFactory 'div'

T = React.PropTypes

module.exports = React.createClass
  displayName: 'light-dropdown'

  propTypes:
    displayText: T.string
    defaultText: T.string.isRequired
    name: T.string

  componentDidMount: ->
    window.addEventListener 'click', @onWindowClick

  componentWillUnmount: ->
    window.removeEventListener 'click', @onWindowClick

  getDefaultProps: ->
    name: 'default'

  getInitialState: ->
    show: false

  onDisplayClick: (event) ->
    @setState show: (not @state.show)

  onClick: (event) ->
    event.stopPropagation()

  onWindowClick: ->
    if @state.show
      @setState show: false

  onDropdownClick: ->
    @setState show: false

  render: ->
    className = classnames 'light-dropdown', "is-for-#{@props.name}",
      'is-chosen': @props.displayText?

    div className: className, onClick: @onClick,
      div className: 'display', onClick: @onDisplayClick,
        @props.displayText or @props.defaultText
      div className: 'triangle'
      if @state.show
        div className: 'dropdown', onClick: @onDropdownClick,
          @props.children
