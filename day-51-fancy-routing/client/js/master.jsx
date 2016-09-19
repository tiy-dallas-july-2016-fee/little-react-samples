import React from 'react';
import store from './the-force-store.js';

class Master extends React.Component {

  constructor() {
    super();

    store.actions.load();

    this.state = store.copyState();

    store.addListener(state => {
      this.setState(state);
    });
  }


  render() {
    return (
      <div>
        <h1>List of Characters</h1>

        {this.state.characters.map((c, i) => {
          return <li key={i}>{c.name}</li>
        })}

      </div>

    );
  }


}

module.exports = Master;
