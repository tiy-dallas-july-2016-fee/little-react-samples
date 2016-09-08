var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
import PropsComponent from './js/PropsComponent.jsx';
import List from './js/list.jsx';
import Character from './js/character.jsx';
import characterCreator from './js/character-creator.js';

//console.log('character creator', characterCreator());

var character1 = characterCreator();
var character2 = characterCreator();

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <p>More samples!</p>

        <Character dude={character1} />
        <Character dude={character2} />


        <PropsComponent steak="awesome" bgColor="pink" />
        <PropsComponent text="third!" />

        <List />
        <List count={5} />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
