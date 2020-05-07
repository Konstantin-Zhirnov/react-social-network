import React from "react";
import styles from "./users.module.sass";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalItemsCount, portionSize, pageSize, users, ...props}) => {

    return (
        <div className={styles.Users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount}
                       pageSize={pageSize} portionSize={portionSize}/>
            <div>
                {
                    users.map(u => <User user={u} key={u.id}
                                               followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow}
                                               follow={props.follow}/>)
                }
            </div>
        </div>
    )
}

export default Users