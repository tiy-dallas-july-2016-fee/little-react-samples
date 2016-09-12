import React from 'react';
import store from './messages-store.js';

function countVowels(str) {
  var count = 0;

  var vowels = 'AEIOUaeiou';
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count += 1;
    }
  }

  return count;
}

class VowelCount extends React.Component {

  constructor() {
    super();

    this.state = {
      vowelCount: 0
    }

    store.addListener(state => {
      this.setState({
        vowelCount: countVowels(state.currentMessage)
      })
    });
  }

  render() {
    return (
      <div>number of vowels: {this.state.vowelCount}</div>
    )
  }

}

module.exports = VowelCount;
