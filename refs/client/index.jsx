import React from 'react';
import { render } from 'react-dom';

import Canvas from './js/canvas.jsx';
import Input from './js/input.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <div className="sample">
          <Canvas />
        </div>
        <div className="sample">
          <Input />
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
