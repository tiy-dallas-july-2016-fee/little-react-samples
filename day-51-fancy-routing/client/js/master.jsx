import React from 'react';
import store from './the-force-store.js';
import { Link } from 'react-router'

class Master extends React.Component {

  constructor() {
    console.log('Master constructor');
    super();

    store.actions.load();

    this.state = store.copyState();

    this.listeningFunc = (state) => {
      this.setState(state);
    }
    store.addListener(this.listeningFunc);
  }

  componentDidMount() {
    console.log('mounting master');
  }

  componentWillUnmount() {
    console.log('component will unmount');
    store.removeListener(this.listeningFunc);
  }

  render() {
    return (
      <div>
        <h1>List of Characters</h1>

        {this.state.characters.map((c, i) => {
          return <li key={i}>{c.name} <Link to={'/detail/' + i}>Detail</Link></li>
        })}

      </div>

    );
  }


}

module.exports = Master;
