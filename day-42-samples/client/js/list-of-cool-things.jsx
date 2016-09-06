import React from 'react';
import LegoTemplate from './cool-thing.jsx';

class ListOfCoolThings extends React.Component {
  constructor() {
    super();

    this.state = {
      legos: [
        {
          color: 'yellow',
          shape: '2x3 studs',
          count: 7
        },
        {
          color: 'red',
          shape: '2x3 flat studs',
          count: 3
        },
        {
          color: 'red',
          shape: '1x8 studs',
          count: 1
        },
        {
          color: 'yellow',
          shape: 'head',
          count: 2
        }
      ]
    }
  }

  _legoClicked(lego) {
    this.state.legos.forEach(function(l) {
      if (l.color === lego.color && l.shape === lego.shape) {
        l.count = l.count + 1
      }
    });
    this.setState(this.state);
  }

  render() {
    var self = this;

    return (
      <div>
        {this.state.legos.map(function(whatever, i) {
          return <LegoTemplate lego={whatever} key={i} anonFunc={function(lego) { self._legoClicked(lego); } } />
        })}
      </div>
    );
  }
}

module.exports = ListOfCoolThings;
