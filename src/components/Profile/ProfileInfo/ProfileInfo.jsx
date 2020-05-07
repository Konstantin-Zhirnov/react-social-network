import React from 'react';
import s from './ProfileInfo.module.sass'
import profileImg from '../../../assets/images/dub.jpg'
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../assets/images/noAvatar.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt="logo" src={profileImg}/>
            </div>
            <div className={s.description_block}>
                <img alt="avatarka" src={profile.photos.large != null ? profile.photos.large : noAvatar}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo
