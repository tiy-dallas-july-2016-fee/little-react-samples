var React = require('react');
var store = require('./todo-store.js');

class TodoList extends React.Component {

  constructor() {
    super();

    store.actions.load();

    this.state = store.getState();
  }

  componentDidMount() {
    var self = this;
    store.onChange(function(state) {
      self.setState(state);
    });
  }

  _inputChanged(evt) {
    if (evt.keyCode === 13) {
      store.actions.addTask(evt.target.value)
      evt.target.value = '';
    }
  }

  _onDelete(index) {
    store.actions.deleteTaskByIndex(index);
  }

  _onToggleState(index) {
    console.log('toggle yo');
    store.actions.toggleStateByIndex(index);
  }

  render() {
    var self = this;

    return (
      <div>
        <input onKeyUp={function(evt) { self._inputChanged(evt) }} />

        <ul className="list">
          {this.state.tasks.map(function(task, i) {
            var className = '';
            if (task.isComplete === 'true') {
              className = 'completed';
            }

            return <li key={task.id} className={className} onClick={function() { self._onToggleState(i); }}>{task.text}
                    <img src="trash.svg"
                      onClick={function() { self._onDelete(i); }}
                      className="icon" />
                    </li>
          })}
        </ul>

      </div>
    )
  }
}

module.exports = TodoList;
