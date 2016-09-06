import React from 'react';

class LegoTemplate extends React.Component {

  _itemClicked(lego) {
    console.log('clicked', lego);
  }



  render() {

    console.log('props', this.props);

    return (
      <div className="lego" style={{ backgroundColor: this.props.lego.color }}>
        <div className="color">{this.props.lego.color}</div>
        <div className="shape">{this.props.lego.shape}</div>
        <div className="count">{this.props.lego.count}</div>
        <button onClick={() => this.props.anonFunc(this.props.lego) }>increment</button>
      </div>
    );
  }

}

module.exports = LegoTemplate;
