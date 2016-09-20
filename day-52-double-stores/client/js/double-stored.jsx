import React from 'react';

import incrementStore from './store-1.js';
import decrementStore from './store-2.js';


class DoubleStored extends React.Component {

  constructor() {
    super();

    this.state = {
      incrementCount: 0,
      decrementCount: 0
    }

    incrementStore.addListener((state) => {
      console.log('increment store update', state);
      this.setState({
        incrementCount: state.count,
        decrementCount: decrementStore.copyState().count
      });
    });

    decrementStore.addListener((state) => {
      console.log('decrement store update', state);
      this.setState({
        incrementCount: incrementStore.copyState().count,
        decrementCount: state.count
      });
    });


  }

  _incrementClicked() {
    incrementStore.actions.increment();
  }

  _decrementClicked() {
    decrementStore.actions.decrement();
  }

  render() {
    return (
      <div>

        <div>
          <div>{this.state.incrementCount}</div>
          <div>{this.state.decrementCount}</div>
        </div>

        <button onClick={() => { this._incrementClicked(); }}>increment</button>
        <button onClick={() => { this._decrementClicked(); }}>decrement</button>
      </div>
    );
  }

}

module.exports = DoubleStored;
