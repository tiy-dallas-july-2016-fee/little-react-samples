var React = require('react');

class BuildASimpleList extends React.Component {

  constructor() {
    super();

    this.state = {
      groceryList:  [
                      'sausage',
                      'shrimp',
                      'Texjoy',
                      'Dr Pepper',
                      'steak',
                      'Tostitos',
                      'cheese',
                      'gum'
                    ]
    }
  }


  render() {

    return (
      <ol id="the-list">
        {this.state.groceryList.map(function(item) {
          return <li key={item}>{item}</li>
        })}
      </ol>
    );

  }

}

module.exports = BuildASimpleList;
