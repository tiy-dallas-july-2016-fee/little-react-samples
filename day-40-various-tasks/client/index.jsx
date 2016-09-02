var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;
var ToggleClassOnClick = require('./js/toggle-class-on-click.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

        <div className="toggle-class-on-click">
          <ToggleClassOnClick />
        </div>

      </div>;
  }
}

render(<App/>, document.getElementById('app'));
