import React from 'react';
import s from './Header.module.sass'
import logoPhoto from '../../../src/assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt="logo" src={logoPhoto} />
            <div className={s.loginBlock}>
                { props.isAuth ? <div><p className={s.headerText}>{props.login}</p><button onClick={props.logout}>Выйти</button></div> :
                <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header