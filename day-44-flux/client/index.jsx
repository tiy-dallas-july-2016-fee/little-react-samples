import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <p>This is a React app!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
