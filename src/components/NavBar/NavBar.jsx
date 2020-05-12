import React from 'react';
import s from './NavBar.module.sass'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile/" activeClassName={s.activeLink}>Профиль</NavLink></div>
            {/*<div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink></div>*/}
            <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink></div>
        </nav>
    )
}

export default NavBar