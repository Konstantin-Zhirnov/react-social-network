import React from "react";
import styles from "./users.module.sass";
import noAvatar from "../../assets/images/noAvatar.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img alt="Аватарка" src={user.photos.small != null ? user.photos.small : noAvatar}
                                 className={styles.photo}/>
                                 </NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            unfollow(user.id)
                                        }}>
                                    ДРУЗЬЯ</button> :
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            follow(user.id)
                                        }}>
                                    Подать заявку</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div><div>{user.status}</div>
                        </span>
                    </span>
        </div>
    )
}
export default User