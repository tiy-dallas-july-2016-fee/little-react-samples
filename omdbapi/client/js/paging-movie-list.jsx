import React from 'react';
import store from './movie-store.js';

class MovieList extends React.Component {

  constructor() {
    super();

    this.state = store.copyState();

    store.addListener(newState => {

      var upperBound = newState.currentPage * 10;
      var lowerBound = upperBound - 10;

      var newArray = newState.movies.slice(lowerBound, upperBound);

      this.setState({
        movies: newArray,
        currentPage: newState.currentPage
      });
    });
  }

  _loadClicked() {
    console.log('load clicked');
    store.actions.load();
  }

  _keyUpHappened(evt) {
    console.log('hey', evt.keyCode);
    if (evt.keyCode === 13) {
      store.actions.load(evt.target.value);
    }
  }

  _back() {
    store.actions.back();
  }

  _next() {
    console.log('next clicked');
    store.actions.next();
  }

  render() {
    return (
      <div className="paging">

        <h2>Paging Movie List</h2>

        <input onKeyUp={this._keyUpHappened} />

        <button onClick={() => this._loadClicked() }>Load the Movies</button>

        <ul className="movie-list">
          {this.state.movies.map(movie => {

            var imageUrl = movie.Poster;
            console.log('image url', imageUrl);
            if (imageUrl === 'N/A') {
              console.log('overriding');
              imageUrl = 'http://www.placecage.com/c/140/200';
            }

            return <li key={movie.imdbID}>
              <img src={imageUrl} />
              {movie.Title}
            </li>
          })}
        </ul>

        <button onClick={() => this._back()}>back</button>
        <div>current page: {this.state.currentPage}</div>
        <button onClick={() => this._next()}>next</button>


      </div>
    );
  }

}

module.exports = MovieList;
