(function() {
  var App, LiteDropdown, PageApp, React, demo, div, languages;

  React = require('react');

  require('./demo.css');

  require('./style.css');

  LiteDropdown = React.createFactory(require('./dropdown'));

  div = React.createFactory('div');

  languages = 'CoffeeScript PureScript Elm CirruScript'.split(' ');

  App = React.createClass({
    displayName: 'page-app',
    getInitialState: function() {
      return {
        lang: void 0
      };
    },
    onItemClick: function(lang) {
      return this.setState({
        lang: lang
      });
    },
    renderLanguages: function() {
      console.log(languages);
      return languages.map((function(_this) {
        return function(lang) {
          var onClick;
          onClick = function() {
            return _this.onItemClick(lang);
          };
          return div({
            key: lang,
            className: 'item',
            onClick: onClick
          }, lang);
        };
      })(this));
    },
    render: function() {
      return LiteDropdown({
        displayText: this.state.lang,
        defaultText: 'Click to select one',
        name: 'css-hook-demo'
      }, this.renderLanguages());
    }
  });

  PageApp = React.createFactory(App);

  demo = document.querySelector('.demo');

  React.render(PageApp(), demo);

}).call(this);
