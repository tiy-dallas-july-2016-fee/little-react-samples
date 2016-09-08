import React from 'react';

class PropsComponent extends React.Component {
  render() {
    //console.log(this.props);

    var styles = {
      backgroundColor: this.props.bgColor,
      color: 'red'
    };

    return (
      <div className="props-component" style={styles}>{this.props.text}</div>
    );

  }
}

module.exports = PropsComponent;
