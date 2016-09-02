var React = require('react');

class ToggleClassOnClick extends React.Component {

  constructor() {
    super();

    this.state = {
      className: 'click-me'
    }
  }

  _toggleClass() {

    //Need to figure out what the last state was.
    var className = this.state.className;

    if (className === 'click-me') { //if the last state wasn't on, switch it on
      className = 'click-me on';
    }
    else { //otherwise, switch it off
      className = 'click-me';
    }

    this.setState({
      className: className
    })
  }

  render() {
    var self = this;

    return (
      <div className={this.state.className} onClick={function() { self._toggleClass(); }}>
      Click me
      </div>
    );
  }

}

module.exports = ToggleClassOnClick;
