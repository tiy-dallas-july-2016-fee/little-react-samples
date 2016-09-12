import React from 'react';
import store from './messages-store.js';

class ChangeOnClick extends React.Component {

  constructor() {
    super();

    this.state = {
      text: 'whatever'
    };

    store.addListener(state => {
      this.setState({
        text: state.currentMessage
      })
    });
  }

  _onClick() {
    store.actions.changeMessage()
  }

  render() {
    return (
      <div onClick={() => this._onClick() }>{this.state.text}</div>
    );
  }

}

module.exports = ChangeOnClick;
