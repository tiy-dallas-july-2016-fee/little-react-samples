var React = require('react');

import PropsComponent from './PropsComponent.jsx';

class Header extends React.Component {

  render () {
    console.log('rendering header!');

    return (
      <header>
        <h1>React Header!</h1>

        <PropsComponent text="in the header!" bgColor="blue" />
      </header>
    );
  }
}

module.exports = Header;
