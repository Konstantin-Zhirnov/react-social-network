import React from 'react';
import s from './ProfileInfo.module.sass'
import profileImg from '../../../assets/images/dub.jpg'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img alt="logo" src={profileImg} />
            </div>
            <div className={s.description_block}>
                <img src={props.profile.photos.large} />
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo