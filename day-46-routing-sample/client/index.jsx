import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import Header from './js/header.jsx';
import Home from './js/home.jsx';
import About from './js/about.jsx';
import OtherPage from './js/other-page.jsx';

require("./scss/style.scss");



class App extends React.Component {

  render () {
    return (
      <div className="container">
        <Header />

        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/otherpage'}>Other Page</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="otherpage" component={OtherPage}/>
    </Route>
  </Router>
), document.getElementById('app'))
