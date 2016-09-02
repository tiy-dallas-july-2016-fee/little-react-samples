var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var Footer = require('./js/footer.jsx');
var FoodList = require('./js/food-list.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />
        <FoodList />
        <Footer />
      </div>
  }
}

render(<App/>, document.getElementById('app'));
