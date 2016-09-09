import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import Clicker from './js/samples/clicker.jsx';
import IsEven from './js/samples/is-even.jsx';
import Reset from './js/samples/reset.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Clicker />

        <IsEven />

        <Reset />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
