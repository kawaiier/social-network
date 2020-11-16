import React from 'react';
import s from './Header.module.css';
import logo from './../../logo.png';

const Header = () => {
    return (
        <header className={s.header}>
        <img src={logo} alt="Logo"/>
        <h1>Social Network</h1>
      </header>
    )
};

export default Header;