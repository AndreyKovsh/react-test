import React from 'react';

const Todo = ({ text, сategory, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <h2 className="TodoList__text">{сategory}</h2>
    <p className="TodoList__text">{text}</p>
    <button type="button" className="TodoList__btn" onClick={onDelete}>
      Delete
    </button>
  </>
);

export default Todo;