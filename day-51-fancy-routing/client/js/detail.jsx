import React from 'react';
import store from './the-force-store.js';


class Detail extends React.Component {

  componentDidMount() {
    console.log('the params', this.props.params);
    var id = Number(this.props.params.index);
    var stateObj = store.copyState();

    if (stateObj.characters.length > 0) {
      var dude = stateObj.characters[id];
      this.setState(dude);
    }
    else {
      store.actions.load();

      this.listeningFunc = (state) => {
        var dude = state.characters[id];
        this.setState(dude);
      }
      store.addListener(this.listeningFunc);
    }
  }

  componentWillUnmount() {
    store.removeListener(this.listeningFunc);
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
