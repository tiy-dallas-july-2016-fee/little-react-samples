import React from 'react';
import { Link } from 'react-router'

class OtherPage extends React.Component {

  render() {
    return (
      <div>
        <Link to={'/about'}>yo</Link>

        <p>This is another page.</p>
      </div>
    )
  }

}

module.exports = OtherPage;
