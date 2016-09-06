var React = require('react');
//import React from 'react'

class ChangeTextOnClick extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  _onClick() {
    console.log('clicking!');
    this.setState({
      theClassName: 'the-class-name'
    })
  }

  render() {
    return (
      <div className={this.state.theClassName} onClick={() => { this._onClick(); }}>
        click me or something
      </div>
    )
  }

  renderWithDuplicateStuffWillNotBeCalled() {

    var self = this;

    if (this.state.hasBeenClicked === true) {
      return (
        <div className="the-class-name" onClick={function() { self._onClick(); }}>
          this has been clicked
        </div>
      )
    }
    else {
      return (
        <div onClick={function() { self._onClick(); }}>
          click me or something
        </div>
      )
    }
  }
}

module.exports = ChangeTextOnClick;
