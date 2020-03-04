import React, { Component } from 'react';
import Header from './components/layout/header'
import Addtodo from './components/Addtodo/Addtodo'
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {id:1, title: 'Take out the trash', completed: false},
      {id:2, title: 'Dinner with wife', completed: false},
      {id:3, title: 'Meeting with boss', completed: true}
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
