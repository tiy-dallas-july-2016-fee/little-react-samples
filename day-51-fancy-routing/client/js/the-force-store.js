var $ = require('jquery');

var state = {
  characters: []
};

var store = {
  listeners: [], //for keeping tracking of components listening for change events
  actions: {} //for actions, see below
}

//What a component will call so it can pass a callback/listener for change events
store.addListener = function(listener) {
  store.listeners.push(listener);
  console.log('listener length (add)', store.listeners.length);
}

store.removeListener = function(listener) {
  var index = store.listeners.indexOf(listener);
  store.listeners.splice(index, 1);
  console.log('listener length (remove)', store.listeners.length);
}

//Makes a copy of the state. This is to protect the state that is managed by the store.
store.copyState = function() {
  return {
    characters: state.characters
  };
}

function changed() {
  console.log('store changed', state);
  var copiedState = store.copyState()
  store.listeners.forEach(function(listener) {
    listener(copiedState);
  });
}


/* ========================================= */
/* Actions                                   */
/* ========================================= */

//Action to increment the state
store.actions.load = function() {
  //load the state
  console.log('load action fired');

  $.ajax({
    url: 'http://swapi.co/api/people'
  }).done(function(returnedData) {
    console.log('data', returnedData);
    state.characters = returnedData.results;

    changed();
  });


}

module.exports = store;
