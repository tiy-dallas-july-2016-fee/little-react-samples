var React = require('react');
var store = require('./store-sample.js');

class FluxComponent extends React.Component {

  constructor() {
    console.log('constructicon');
    super();

    //store.actions.doThing();

    this.state = store.copyState();
  }

  componentDidMount() {
    console.log('componentDidMount');
    var self = this;

    var omar = function(state) {
      self.setState(state);
    };

    store.onChange(omar);
  }

  _onClick() {
    console.log('_onClick');
    store.actions.doThing()
  }

  render() {
    console.log('render');
    var self = this;

    return (
      <div>
        <div onClick={function() { self._onClick(); }}>Click me: {this.state.count}</div>
      </div>
    )
  }
}

module.exports = FluxComponent;
