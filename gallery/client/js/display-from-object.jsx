let React = require('react');

class DisplayFromObject extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 50
    }
  }

  render() {
    return (
      <div className="sample">
        <div className="first-name">First Name: {this.state.firstName}</div>
        <div className="last-name">Last Name: {this.state.lastName}</div>
        <div className="age">Age: {this.state.age}</div>
      </div>
    )
  }
}



module.exports = DisplayFromObject;
