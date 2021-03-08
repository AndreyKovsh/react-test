import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <>
        <header className="Header">
            <NavLink
                exact
                to="/"
                className="NavLink"
                activeClassName="NavLink__active"
            >
                HOME
            </NavLink>
            <NavLink
                exact
                to="/todos"
                className="NavLink"
                activeClassName="NavLink__active"
            >
                TODO LIST
            </NavLink> 
            <button type="button">ChangeTheme</button>
        </header>
    </>
);

export default Header;