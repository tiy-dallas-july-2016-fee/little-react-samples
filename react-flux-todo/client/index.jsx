var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var TodoList = require('./js/todo-list.jsx');

console.log('totes header', Header, TodoList);

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div className="container">
        <Header />

        <TodoList />
      </div>);
  }
}

render(<App/>, document.getElementById('app'));
