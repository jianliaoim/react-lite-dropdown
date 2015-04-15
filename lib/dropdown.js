(function() {
  var React, T, classnames, div;

  React = require('react');

  classnames = require('classnames');

  div = React.createFactory('div');

  T = React.PropTypes;

  module.exports = React.createClass({
    displayName: 'light-dropdown',
    propTypes: {
      displayText: T.string,
      defaultText: T.string.isRequired,
      name: T.string
    },
    componentDidMount: function() {
      return window.addEventListener('click', this.onWindowClick);
    },
    componentWillUnmount: function() {
      return window.removeEventListener('click', this.onWindowClick);
    },
    getDefaultProps: function() {
      return {
        name: 'default'
      };
    },
    getInitialState: function() {
      return {
        show: false
      };
    },
    onDisplayClick: function(event) {
      return this.setState({
        show: !this.state.show
      });
    },
    onClick: function(event) {
      return event.stopPropagation();
    },
    onWindowClick: function() {
      if (this.state.show) {
        return this.setState({
          show: false
        });
      }
    },
    onDropdownClick: function() {
      return this.setState({
        show: false
      });
    },
    render: function() {
      var className;
      className = classnames('light-dropdown', "is-for-" + this.props.name, {
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
      }), this.state.show ? div({
        className: 'dropdown',
        onClick: this.onDropdownClick
      }, this.props.children) : void 0);
    }
  });

}).call(this);
