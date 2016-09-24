import React from 'react';

class Input extends React.Component {

  constructor() {
    super();

    this.state = {
      showInput: false
    }
  }

  _onClick() {
    //`this._input` has the actual browser DOM element in it.
    //var val = this._input.value;

    // setInterval(() => {
    //   this.setState({
    //     showInput: true
    //   })
    // }, 1000);




    this.setState({
      showInput: true
    })

    setInterval(() => {

    }, 300);

    //console.log('the value', val);



  }

  render() {

    var input;
    if (this.state.showInput) {
      input = <input type="text" autoFocus className="" ref={input => this._input = input} />;
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
