var React = require('react');

class ListItemWithProps extends React.Component {

  render() {
    return <li>{this.props.text}</li>;
  }

}

module.exports = ListItemWithProps;
