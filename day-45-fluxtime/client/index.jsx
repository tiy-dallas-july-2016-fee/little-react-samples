import React from 'react';
import { render } from 'react-dom';

//var render = require('react-dom').render;

import Header from './js/header.jsx';
import ChangeOnClick from './js/change-on-click.jsx';
import VowelCount from './js/vowel-count.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <ChangeOnClick />

        <VowelCount />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
