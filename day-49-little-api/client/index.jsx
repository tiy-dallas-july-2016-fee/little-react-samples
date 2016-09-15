import React from 'react';
import { render } from 'react-dom';

import LeaderList from './js/leader-list.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <LeaderList />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
