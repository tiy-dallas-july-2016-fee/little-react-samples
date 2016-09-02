var React = require('react');

var ListItemWithProps = require('./list-item-with-props.jsx');

class PropsExample extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 1,
          value: 'First item'
        },
        {
          id: 2,
          value: 'Second item'
        }
      ]
    }
  }

  render() {
    return (
      <div className="sample">
        <h2>Props Example</h2>

        <ul>
          {this.state.items.map(function(obj) {
            return <ListItemWithProps key={obj.id} text={obj.value} />
          })}
        </ul>
      </div>
    )
  }

}

module.exports = PropsExample;
