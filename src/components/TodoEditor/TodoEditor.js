import React, { Component } from 'react';
import './TodoEditor.css';

const INITIAL_STATE = {
  massage: '',
  category: '',
};

class TodoEditor extends Component {
    state = { ...INITIAL_STATE };


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  handleSubmit = evt => {
    evt.preventDefault();

    const { massage, category } = this.state;

    // console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { massage, category } = this.state;

    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <label>
          <input
            className="TodoEditor__input"
            type="text"
            placeholder="Enter text"
            name="massage"
            value={massage}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className="TodoEditor__input"
            type="text"
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </label>
        
        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;