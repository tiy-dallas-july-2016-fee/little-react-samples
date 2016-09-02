var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var ChangeTextOnClick = require('./js/change-text-on-click.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

        <p>Re-implemting the change text on click assignment!</p>

        <ChangeTextOnClick />
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
