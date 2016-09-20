import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import DoubleStored from './js/double-stored.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <DoubleStored />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
