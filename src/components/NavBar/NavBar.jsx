import React from 'react';
import s from './NavBar.module.sass'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile/" activeClassName={s.activeLink}>Профиль</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Музыка</NavLink></div>
            <div className={`${s.item} ${s.margin_top}`}><NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink></div>
            <div className={`${s.item} ${s.margin_top}`}><NavLink to="/settings"activeClassName={s.activeLink}>Настройки</NavLink></div>
        </nav>
    )
}

export default NavBar