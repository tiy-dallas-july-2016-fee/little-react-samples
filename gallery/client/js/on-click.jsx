var React = require('react');

class OnClicker extends React.Component {

  constructor() {
    super();
    this.state = {
      clickValue: 0
    };
  }

  _clickMe() {
    console.log('clicking', this);
    this.setState({
      clickValue: this.state.clickValue + 1
    });
  }

  render() {
    console.log('render');
    var self = this;

    return (
      <div className="sample">
        <h2>OnClicker</h2>
        <p>{this.state.clickValue}</p>
        <button onClick={function() {
            self._clickMe();
          }}>click me</button>
      </div>
    );
  }

}

module.exports = OnClicker;
