import React from 'react';
import store from './the-force-store.js';


class Detail extends React.Component {

  componentDidMount() {
    console.log('the params', this.props.params);
    var id = Number(this.props.params.index);
    var stateObj = store.copyState();
    var dude = stateObj.characters[id];
    this.setState(dude);
  }

  render() {
    console.log('render state:', this.state);

    if (this.state === null) {
      return (<div>loading character...</div>)
    }

    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>Skin color: {this.state.skin_color}</p>
      </div>
    );
  }

}

module.exports = Detail;
