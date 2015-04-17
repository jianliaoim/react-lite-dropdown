
import {default as React} from 'react';
import './demo.css';
import './style.css';

import {default as LiteDropdown} from './dropdown';

var languages = 'CoffeeScript PureScript Elm CirruScript'.split(' ');

var App = React.createClass({
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
