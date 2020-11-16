import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    console.log('This is props in NAVBAR')
    console.log(props)
    return (
        <nav className={s.navigation}>
            <div>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <Sidebar />
            {/*<Sidebar store={props.store} />*/}
            <div>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;