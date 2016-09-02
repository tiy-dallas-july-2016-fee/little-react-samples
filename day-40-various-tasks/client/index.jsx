var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;
var ToggleClassOnClick = require('./js/toggle-class-on-click.jsx');
var BuildASimpleList = require('./js/build-a-simple-list.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

        <div className="toggle-class-on-click">
          <h2>Toggle Class on Click Assignment</h2>

          <ToggleClassOnClick />
        </div>

        <div className="build-a-simple-list">

          <h2>Build a Simple List Assignment</h2>

          <BuildASimpleList />
        </div>

      </div>;
  }
}

render(<App/>, document.getElementById('app'));
