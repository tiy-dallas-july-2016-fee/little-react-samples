import React from 'react';
import store from './leader-store.js';

class LeaderList extends React.Component {

  constructor() {
    super();

    store.actions.load();

    this.state = store.copyState();
    console.log('constructor!', this.state);

    var self = this;
    store.addListener(function(state) {
      self.setState(state);
    });
  }

  render() {
    console.log('rendering');
    return (
      <div>
        <h1>The Diadochi</h1>

        <ul>
          {this.state.leaders.map((leader, i) => <li key={i}><a href={leader.url}>{leader.name}</a></li>)}
        </ul>
      </div>
    )
  }

}

module.exports = LeaderList;
