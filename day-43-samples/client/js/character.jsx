import React from 'react';

class Character extends React.Component {

  render() {
    //console.log('Character props', this.props);

    return (
      <div>
        <div>Name: {this.props.dude.name}</div>
        <div>Hit points: {this.props.dude.hitPoints}</div>
      </div>
    );
  }

}

module.exports = Character;
