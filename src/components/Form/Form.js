import React from 'react';
import style from './Form.css';

const Form = ({ name, email, massage, onSubmit, onReset, onClose }) => (
  <form className="form">
    <input
            type={name}
            className="form__input"
      placeholder="Name"
    />
    <input
            type={email}
            className="form__input"
      placeholder="Email"      
    />
    <textarea
            type={massage}
            className="form__textarea"
      placeholder="Massage"
    />    
    <div className="form__btns">
      <button type="submit" className="button_form" onClick={onSubmit}>
        Submit
      </button>
      <button type="button" className="button_form" onClick={onReset}>
        Reset
      </button>
      <button type="button" className="button_form" onClick={onClose}>
        Cancel
      </button>      
    </div>
  </form>
);

export default Form;