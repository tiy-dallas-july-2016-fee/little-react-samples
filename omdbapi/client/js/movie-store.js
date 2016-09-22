var $ = require('jquery');

/* ========================================= */
/* Store Setup                               */
/* ========================================= */

//customize to whatever makes sense for your state. For the clicker, we only need the count.
var state = {
  movies: [],
  page: 1,
  currentPage: 1,
  movieName: ''
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
    movies: state.movies,
    page: state.page,
    currentPage: state.currentPage
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

/* ========================================= */
/* Actions                                   */
/* ========================================= */

//Action to increment the state
store.actions.load = function(movieName) {
  console.log('loading', movieName);
  //for the sake of time, if someone loads without a movie name, we will default 'Batman', because he's Batman.
  if (movieName === undefined || movieName === '') {
    movieName = 'Batman';
  }

  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + movieName
  })
  .done(data => {
    state.movies = data.Search;
    state.movieName = movieName;
    changed();
  });
}

store.actions.next = function() {

  if (state.page === state.currentPage) {
    state.page = state.page + 1;
    state.currentPage = state.currentPage + 1;


    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + state.movieName + '&page=' + state.page
    })
    .done(data => {
      state.movies = state.movies.concat(data.Search);
      changed();
    });
  }
  else {
    state.currentPage = state.currentPage + 1;
    changed();
  }


}

store.actions.back = function() {
  state.currentPage = state.currentPage - 1;
  changed();
}

module.exports = store;
