import React from 'react';

class Input extends React.Component {

  constructor() {
    super();

    this.state = {
      showInput: false
    }
  }

  _onClick() {

    this.setState({
      showInput: true
    })

  }

  render() {

    var input;
    if (this.state.showInput) {
      input = <input type="text" autoFocus ref={input => this._input = input} />;
    }

    return (
      <div>
        {input}
        <button onClick={() => this._onClick()}>get text of input</button>
      </div>
    )
  }

}

module.exports = Input;
