import React from 'react';
import store from './clicker-store.js';

class IsEven extends React.Component {

  constructor() {
    super();

    this.state = store.copyState();
  }

  componentDidMount() {
    var self = this;
    store.addListener(function(state) {
      self.setState(state);
    });
  }

  render() {

    var evenValue = 'It is even!';
    if (this.state.count % 2 !== 0) {
      evenValue = 'It is odd :(';
    }

    return (
      <div>{evenValue}</div>
    );
  }

}

module.exports = IsEven;
