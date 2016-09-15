import React from 'react';

/*
Canvas requires that you get the actual canvas element so you can get the context object for drawing. We'll use `refs` to get a reference to that.
*/

class Canvas extends React.Component {

  _drawRect() {
    //`this._canvas` has the actual browser DOM element in it. That's why we can get the context here.
    var ctx = this._canvas.getContext('2d');
    ctx.fillRect(20, 20, 50, 70);
    ctx.fill();
  }

  render() {
    return (
      <div>
        <canvas ref={c => this._canvas = c}>
        </canvas>
        <button onClick={() => this._drawRect()}>draw a rectangle</button>
      </div>
    );
  }

}

module.exports = Canvas;
