import React from 'react';

var store = require('./store-sample.js');

class IsEven extends React.Component {

  constructor() {
    super();

    this.state = store.copyState();
  }

  componentDidMount() {
    var self = this;
    store.onChange(function(st) {
      self.setState(st);
    });
  }

  render() {

    var isEven = 'true';
    if (this.state.count % 2 !== 0) {
      isEven = 'false';
    }

    return (
      <div>Is even? {isEven}</div>
    );
  }

}

module.exports = IsEven;
