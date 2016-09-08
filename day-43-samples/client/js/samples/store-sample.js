var dispatcher = require('./../dispatcher');
var $ = require('jquery');

/* ========================================= */
/* Store Setup */
/* ========================================= */

//customize to whatever makes sense for your state
var state = {
  count: 0
}

var store = {
  callbacks: [],
  actions: {}
}

store.onChange = function(callback) {
  store.callbacks.push(callback);
}

store.changed = function() {
  console.log('store change', state);
  var st = store.copyState();

  for (var i = 0; i < store.callbacks.length; i++) {
    var thisIsAFunction = store.callbacks[i];
    thisIsAFunction(st);
  }

}

store.copyState = function() {
  //customize to store state
  return {
    count: state.count
  };
}

/* ========================================= */
/* Actions */
/* ========================================= */


store.actions.doThing = function() {
  state.count = state.count + 1;
  store.changed();
}

module.exports = store;
