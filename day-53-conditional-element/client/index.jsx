import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';

require("./scss/style.scss");

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      stage: 'not yet started' //in progress, over
    }
  }

  _clicky() {

    var stage;
    if (this.state.stage === 'not yet started') {
      stage = 'in progress';
    }
    else if (this.state.stage === 'in progress') {
      stage = 'over';
    }
    else if (this.state.stage === 'over') {
      stage = 'in progress';
    }



    this.setState({
      stage: stage
    });
  }

  render () {


    var messaging;
    var buttonText;
    if (this.state.stage === 'not yet started') {
      messaging = <p>Start the game!</p>;
      buttonText = 'Start';
    }
    else if (this.state.stage === 'in progress') {
      messaging = <p>Kill them!</p>
      buttonText = 'kill them yo';
    }
    else {
      messaging = <p>It is over!</p>
      buttonText = 'restart';
    }


    return (
      <div>

        {messaging}

        <p>Paragraph is App component!</p>

        <button onClick={() => this._clicky() }>{buttonText}</button>

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
