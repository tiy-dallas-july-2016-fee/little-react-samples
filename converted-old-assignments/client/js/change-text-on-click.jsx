var React = require('react');

class ChangeTextOnClick extends React.Component {

  constructor() {
    super();
    this.state = {
      text: 'Click me'
    }
  }

  _clickThatParagraphYo() {
    console.log('clicked');
    this.setState({
      text: 'Clicked on this so much just now'
    });
  }

  render() {
    var self = this;

    function forOmar() {
      console.log('omar!');
      self._clickThatParagraphYo();
    }

    return (
      <p className="the-paragraph" onClick={forOmar}>{this.state.text}</p>
    );
  }

}

module.exports = ChangeTextOnClick;
