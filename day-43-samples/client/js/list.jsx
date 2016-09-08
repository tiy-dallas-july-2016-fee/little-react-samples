import React from 'react';

class List extends React.Component {

  render() {
    //console.log('List props', this.props);

    var items = [];

    //this `this.props.count` value will come from defaults if not specified, but if specified the value will override the defaults.
    for (var i = 0; i < this.props.count; i++) {
      items.push(<li key={i}>{i + 1}</li>);
    }

    return (
      <ul>
        {items}
      </ul>
    );
  }

}

//If a prop value isn't specified, it uses these defaults
List.defaultProps = { count: 10, cow: 'bovine' };

module.exports = List;
