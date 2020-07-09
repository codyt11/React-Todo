import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
const todo = [
  {
    task: 'chores',
    id: '123',
    completed: false
  }
];

class App extends React.Component {
  
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if(itemId === item.id) {
          return{
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    })
  };

  clearComplete = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(task => !task.complete)
    });
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List!</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
