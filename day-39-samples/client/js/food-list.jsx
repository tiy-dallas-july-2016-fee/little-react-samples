var React = require('react');

class FoodList extends React.Component {

  constructor() {
    super();

    this.foodPlaces = [
      { id: 1, name: 'Pizza Hut' },
      { id: 2, name: 'Mad Hatter' },
      { id: 3, name: 'McDonalds' },
      { id: 4, name: 'Pappas Bros' }
    ];
  }

  render() {

    //this
    console.log('food', this.foodPlaces);
    var something = 'hi';

    return (
      <ul>
        {this.foodPlaces.map(function(place) {
          return <li key={place.id}>{place.name}</li>
        })}
      </ul>
    );
  }

}

module.exports = FoodList;
