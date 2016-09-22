import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import ShowMoreMovieList from './js/show-more-movie-list.jsx';
import PagingMovieList from './js/paging-movie-list.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <ShowMoreMovieList />

        <PagingMovieList />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
