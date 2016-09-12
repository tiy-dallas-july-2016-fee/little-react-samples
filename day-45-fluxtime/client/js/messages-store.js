
var messages = [
  'yo dawg',
  'I like your pants',
  'red warrior needs food badly',
  'spoon!'
];

function getRandomMessage() {
  var index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

var state = {
  currentMessage: getRandomMessage()
}


var store = {
  listeners: [],
  actions: {}
};

store.addListener = function(listener) {
  store.listeners.push(listener);
}

store.copyState = function() {
  return {
    currentMessage: state.currentMessage
  }
}

function changed() {
  var copiedState = store.copyState();
  console.log('alerting for new state', copiedState);
  store.listeners.forEach(function(listener) {
    console.log('alerting listener');
    listener(copiedState);
  })
}

/* ========================================= */
/* Actions                                   */
/* ========================================= */

store.actions.changeMessage = function() {
  console.log('change message');
  state.currentMessage = getRandomMessage();
  changed();
}

module.exports = store;
