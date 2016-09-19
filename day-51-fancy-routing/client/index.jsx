import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Master from './js/master.jsx';
import Detail from './js/detail.jsx';
import Third from './js/third.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <p>app</p>
        <Link to={'/master'}>Master</Link>
        <Link to={'/detail'}>Detail</Link>
        <Link to={'/whateverIwantittobe'}>Whatever bro</Link>

      {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="master" component={Master}/>
      <Route path="detail" component={Detail} />
      <Route path="whateverIwantittobe" component={Third} />
    </Route>
  </Router>
), document.getElementById('app'));
