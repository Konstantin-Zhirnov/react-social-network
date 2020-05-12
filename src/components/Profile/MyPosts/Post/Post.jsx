import React from 'react';
import s from './Post.module.sass'
import noAvatar from "../../../../assets/images/noAvatar.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import like from "../../../../assets/images/like.png";

const Post = ({profile, id, likeCount, message, setLikeCount}) => {
    if (!profile) {
        return <Preloader/>
    }


    let setLike = (e) => {
        setLikeCount(e.target.id)
    }



    return (
        <div className={s.item}>
            <div className={s.leftBlock}>
                <div><img className={s.itemImg} alt="avatarka" src={profile.photos.large || noAvatar} /></div>
                <div><img id={id} onClick={setLike} className={s.likeImg} alt="like" src={like} /><span>{likeCount}</span></div>
            </div>
            <div className={s.rightBlock}><p>{message}</p></div>

        </div>
    )
}


export default Post