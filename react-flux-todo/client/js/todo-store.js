var dispatcher = require('./dispatcher');
var $ = require('jquery');

//customize to whatever makes sense for your state
var state = {
  tasks: []
}

var store = {
  changeEventName: 'todo-store-change', //customize name
  callbacks: [],
  actions: {}
}

store.onChange = function(callback) {
  store.callbacks.push(callback);
}

store.change = function() {
  console.log('store change', state);
  store.callbacks.forEach(function(cb) {
    cb(store.getState());
  });
}

store.getState = function() {
  //customize to store state
  return {
    tasks: state.tasks
  };
}

/* ========================================= */
/* Actions */
/* ========================================= */


store.actions.addTask = function(text) {
  console.log('adding text', text);
  $.ajax({
    url: 'api/todo',
    method: 'POST',
    data: {
      text: text,
      isComplete: false
    }
  })
  .done(function(data) {
    console.log('data', data);
    state.tasks.push({
      id: data.id,
      text: text,
      isComplete: false
    });
    store.change();
  });
}

store.actions.load = function() {
  $.ajax({
    url: 'api/todo',
    method: 'GET'
  })
  .done(function(data) {
    console.log('data', data);
    data.list.forEach(function(task) {
      state.tasks.push(task);
    })
    store.change();
  });
}

store.actions.deleteTaskByIndex = function(index) {
  var task = state.tasks[index];
  state.tasks.splice(index, 1);
  store.change();

  $.ajax({
    url: 'api/todo/' + task.id,
    method: 'DELETE'
  });
}

store.actions.toggleStateByIndex = function(index) {
  var task = state.tasks[index];
  console.log('task', task);
  if (task.isComplete === 'true') {
    task.isComplete = 'false';
  }
  else {
    task.isComplete = 'true';
  }
  store.change();

  $.ajax({
    url: 'api/todo/' + task.id,
    method: 'PUT',
    data: {
      text: task.text,
      isComplete: task.isComplete
    }
  })
}

module.exports = store;
