import styles from './Preloader.module.sass';
import loaderImg from "../../../assets/images/loader.gif";
import React from "react";



let Preloader = (props) => {
    return (
        <div className={styles.loaderBox}><img alt="Preloader" src={loaderImg}  className={styles.loader}/></div>
        )
}

export default Preloader

