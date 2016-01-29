
import {default as React} from 'react';
import {default as ReactDOM} from 'react-dom';
import './demo.css';
import './style.css';

import {default as LiteDropdown} from './dropdown';

var languages = 'CoffeeScript PureScript Elm CirruScript'.split(' ');

var App = React.createClass({
  displayName: 'page-app',
  getInitialState: function() {
    return {
      lang: undefined,
      showMenu: false
    };
  },
  onItemClick: function(lang) {
    return this.setState({
      lang: lang
    });
  },
  onMenuToggle: function() {
    this.setState({showMenu: !this.state.showMenu});
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
      show={this.state.showMenu}
      onToggle={this.onMenuToggle}
      name={'css-hook-demo'}>{this.renderLanguages()}</LiteDropdown>
  }
});

var PageApp = React.createFactory(App);

var demo = document.querySelector('.demo');

ReactDOM.render(PageApp(), demo);
