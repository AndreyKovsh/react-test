import React, { Component } from 'react';

class CompletedTodosView extends Component {
  state = {
    todos: [],
  }
  
  render() {
    return (
      <>
        <h2>Completed Todos</h2 >

        <ul>
          {this.state.todos.map(todos => (
            <li key={todos.id}></li>
          ))}
        </ul>

      </>
    );
  }
}

export default CompletedTodosView;
