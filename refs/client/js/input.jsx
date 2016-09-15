import React from 'react';

class Input extends React.Component {

  _onClick() {
    //`this._input` has the actual browser DOM element in it.
    var val = this._input.value;
    console.log('the value', val);
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this._input = input} />
        <button onClick={() => this._onClick()}>get text of input</button>
      </div>
    )
  }

}

module.exports = Input;
