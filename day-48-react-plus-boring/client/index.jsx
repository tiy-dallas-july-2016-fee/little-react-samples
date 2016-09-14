import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import Clicker from './js/samples/clicker.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Clicker />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
