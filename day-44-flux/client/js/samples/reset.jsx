import React from 'react';
import store from './clicker-store.js';

class Reset extends React.Component {

  _onClick() {
    console.log('clicking reset');
    store.actions.reset();
  }

  render() {
    var self = this;

    return (
      <div onClick={function() { self._onClick(); }}>reset</div>
    );
  }

}

module.exports = Reset;
