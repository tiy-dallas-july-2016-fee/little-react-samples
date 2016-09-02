var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;
var ListFromArray = require('./js/list-from-array.jsx');
var DisplayFromObject = require('./js/display-from-object.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <ListFromArray />
        <DisplayFromObject />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
