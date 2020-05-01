import React from "react";
import styles from "./users.module.sass";
import noAvatar from "../../assets/images/noAvatar.jpg";
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.Users}>
            <div className={styles.pangination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt="Аватарка" src={u.photos.small != null ? u.photos.small : noAvatar}
                                 className={styles.photo}/>
                                 </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>ДРУЗЬЯ</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Подать заявку</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users