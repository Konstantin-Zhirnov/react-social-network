import React from 'react';
import s from './Post.module.sass'
import avaImg from '../../../../assets/images/ava.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="ava" src={avaImg} />
            {props.message}
            <div><span>Like </span>{props.likeCount}</div>
        </div>
    )
}

export default Post