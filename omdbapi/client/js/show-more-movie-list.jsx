import React from 'react';
import store from './movie-store.js';

class MovieList extends React.Component {

  constructor() {
    super();

    this.state = store.copyState();

    store.addListener(state => {
      this.setState(state);
    });
  }

  _loadClicked() {
    console.log('load clicked');
    store.actions.load();
  }

  _next() {
    console.log('next clicked');
    store.actions.next();
  }

  render() {
    return (
      <div className="show-more">

        <h2>Show More Movie List</h2>

        <button onClick={() => this._loadClicked() }>Load the Movies</button>

        <ul className="movie-list">
          {this.state.movies.map(movie => {
            return <li key={movie.imdbID}>{movie.Title}</li>
          })}
        </ul>

        <button onClick={() => this._next()}>next</button>


      </div>
    );
  }

}

module.exports = MovieList;
