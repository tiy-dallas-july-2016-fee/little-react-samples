var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var ToggleClassOnClick = require('./js/toggle-class-on-click.jsx');
var BuildASimpleList = require('./js/build-a-simple-list.jsx');
var ChangeTextOnClick = require('./js/change-text-on-click.jsx');
var Incrementer = require('./js/incrementer.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div className="container">
        <Header />

        <div className="sample build-a-simple-list">

          <h2>Build a Simple List</h2>

          <BuildASimpleList />
        </div>

        <div className="sample change-text-on-click">
          <h2>Change Text On Click</h2>

          <ChangeTextOnClick />
        </div>

        <div className="sample toggle-class-on-click">
          <h2>Toggle Class on Click</h2>

          <ToggleClassOnClick />
        </div>

        <div className="sample incrementer">
          <h2>Incrementer</h2>

          <Incrementer />
        </div>

      </div>;
  }
}

render(<App/>, document.getElementById('app'));
