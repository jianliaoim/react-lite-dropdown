(function() {
  var DropdownMenu, React, T, classnames, div;

  React = require('react');

  classnames = require('classnames');

  div = React.createFactory('div');

  T = React.PropTypes;

  DropdownMenu = React.createFactory(React.createClass({
    displayName: 'lite-dropdown-menu',
    propTypes: {
      onClose: T.func
    },
    componentDidMount: function() {
      var event;
      event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
      return window.addEventListener('click', this.onWindowClick);
    },
    componentWillUnmount: function() {
      return window.removeEventListener('click', this.onWindowClick);
    },
    onWindowClick: function() {
      return this.props.onClose();
    },
    onClick: function() {
      return this.props.onClose();
    },
    render: function() {
      return div({
        className: 'dropdown',
        onClick: this.onClick
      }, this.props.children);
    }
  }));

  module.exports = React.createClass({
    displayName: 'lite-dropdown',
    propTypes: {
      show: T.bool.isRequired,
      onToggle: T.func.isRequired,
      displayText: T.string,
      defaultText: T.string.isRequired,
      name: T.string
    },
    getDefaultProps: function() {
      return {
        name: 'default'
      };
    },
    getInitialState: function() {
      return {};
    },
    onDisplayClick: function(event) {
      return this.props.onToggle();
    },
    onClick: function(event) {
      return event.stopPropagation();
    },
    onDropdownClose: function() {
      return this.props.onToggle();
    },
    render: function() {
      var className;
      className = classnames('lite-dropdown', "is-for-" + this.props.name, {
        'is-chosen': this.props.displayText != null
      });
      return div({
        className: className,
        onClick: this.onClick
      }, div({
        className: 'display',
        onClick: this.onDisplayClick
      }, this.props.displayText || this.props.defaultText), div({
        className: 'triangle'
      }), this.props.show ? DropdownMenu({
        onClose: this.onDropdownClose
      }, this.props.children) : void 0);
    }
  });

}).call(this);
