var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var ChangeTextOnClick = require('./js/change-text-on-click.jsx');

import ListOfCoolThings from './js/list-of-cool-things.jsx';
import CoolThing from './js/cool-thing.jsx';

console.log('ListOfCoolThings', ListOfCoolThings);

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <p>This is a React app!</p>

        <ChangeTextOnClick />
        <ListOfCoolThings />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
