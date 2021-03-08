import React, { Component } from 'react';
// import initialTodos from '../todos.json';

class ActiveTodosView extends Component {
  state = {
    todos: [],
  }

  
  render() {
    return (
      <>
        <h2>Active Todos</h2 >

        <ul>
          {this.state.todos.map(todos => (
            <li key={todos.id}></li>
          ))}
        </ul>

      </>
    );
  }
}

export default ActiveTodosView;
