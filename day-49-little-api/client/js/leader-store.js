var $ = require('jquery');

var state = {
  leaders: []
}

//stores will need to keep track of listeners for changes and actions.
var store = {
  listeners: [], //for keeping tracking of components listening for change events
  actions: {} //for actions, see below
}

//What a component will call so it can pass a callback/listener for change events
store.addListener = function(listener) {
  store.listeners.push(listener);
}

//Makes a copy of the state. This is to protect the state that is managed by the store.
store.copyState = function() {
  return {
    leaders: state.leaders
  };
}

//To be called any time the state is changed.
function changed() {
  console.log('store changed', state);
  var copiedState = store.copyState()
  store.listeners.forEach(function(listener) {
    listener(copiedState);
  });
}




store.actions.load = function() {
  console.log('loading');

  $.ajax({
    url: '/api/diadochi'
  })
  .done(function(data) {
    console.log('ajax call done', data);
    //since data is the array of leaders...
    state.leaders = data;
    console.log('the state is', state);
    changed();
  });

}

module.exports = store;
