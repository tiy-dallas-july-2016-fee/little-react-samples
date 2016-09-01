let React = require('react');

class ListFromArray extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 1,
          name: 'Captain America'
        },
        {
          id: 2,
          name: 'Thor'
        },
        {
          id: 3,
          name: 'Hulk'
        },
        {
          id: 4,
          name: 'Black Widow'
        },
        {
          id: 5,
          name: 'Hawkeye'
        },
        {
          id: 6,
          name: 'Iron Man'
        }
      ]
    };
  }


  render() {

    return (
      <div className="sample">
        <h2>List from Array</h2>
        <ul>
        {this.state.items.map(function(x) {
          return <li key={x.id}>{x.name}</li>
        })}
        </ul>
      </div>
    )
  }

}

module.exports = ListFromArray;
