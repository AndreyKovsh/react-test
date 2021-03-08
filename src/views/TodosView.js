import React, { Component } from 'react';
import shortid from 'shortid';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Modal from '../components/Modal';
import initialTodos from '../todos.json';


const styles = {
  barStyles: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  buttonStyles: {
    padding: '12px 16px',
    bordeRradius: '4px',
    backgroundColor: 'orangered',
    color: 'white',
    fontWeight: '500',
  }
};

class TodosView extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    console.log(text);  
    const todo = {
      id: shortid.generate(),
      text: text.massage,
      category: text.category,
      completed: false,
    }; 

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

     return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <div style={styles.barStyles}>
          <Filter value={filter} onChange={this.changeFilter} />
          <button style={styles.buttonStyles} onClick={this.toggleModal}>
            AddTodo
          </button>

        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />        
          </Modal>
        )}
      </>
    );
  }
}

export default TodosView;