var React = require('react');

class Incrementer extends React.Component {

  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  _up() {
    this.setState({
      number: this.state.number + 1
    })
  }

  _down() {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    var self = this;

    function upFunc() {
      self._up();
    }

    function downFunc() {
      self._down();
    }

    return (
      <div>
        <div className="incrementer-output">{this.state.number}</div>
        <button onClick={upFunc}>up</button>
        <button onClick={downFunc}>down</button>
      </div>
    )
  }

}

module.exports = Incrementer;
