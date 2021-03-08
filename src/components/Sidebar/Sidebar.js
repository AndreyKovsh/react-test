import React, { Component } from 'react';
import './Sidebar.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import ActiveTodosView from '../../views/ActiveTodosView';
import CompletedTodosView from '../../views/CompletedTodosView';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

      
class Sidebar extends Component {
  state = {
    visible: false,
    showModal: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
      const { visible, showModal } = this.state;
      
        return (
          <div className="Sidebar">
            <button
              type="button"
              className="Sidebar__button"
              onClick={this.toggle}>
                Sidebar {visible ? 'Close' : 'Open'}
            </button>

            {visible && <div className="Sidebar__menu">
              <ul className="Sidebar__menu">
                <li className="Sidebar__menu__item">
                  <NavLink
                    exact
                    to="/todos/active"
                    className="NavLink"
                    activeClassName="NavLink__active"
                  >
                    Active todos
                  </NavLink>   
                </li>
                <li className="Sidebar__menu__item">
                  <NavLink
                    exact
                    to="/todos/completed"
                    className="NavLink"
                    activeClassName="NavLink__active"
                  >
                    Completed todos
                  </NavLink>                             
                </li>
              </ul>
              <button type="button" onClick={this.toggleModal}>Contact us</button>

              <Switch>
                <Route exact path="/todos/active" component={ActiveTodosView} />
                <Route exact path="/todos/completed" component={CompletedTodosView} />
              </Switch>
            </div>}

            {showModal && (
              <Modal onClose={this.toggleModal}>
                <Form />                
              </Modal>
            )}
          </div>
        )
    }
}

export default Sidebar;