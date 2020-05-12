import React, {useState} from 'react';
import s from './ProfileInfo.module.sass'
import profileImg from '../../../assets/images/dub.jpg'
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../assets/images/noAvatar.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img alt="logo" src={profileImg}/>
            </div>
            <div className={s.description_block}>
                <div className={s.imgBox}>
                <img alt="avatarka" src={profile.photos.large || noAvatar} className={s.mainFoto}/>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.contacts}>
            <div>
                <b>Логин: </b>{profile.fullName}
            </div>
            <div>
                <b>Ищу работу: </b>{profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Профессиональные навыки: </b>{profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Обо мне: </b>{profile.aboutMe || "------------------"}
            </div>
            <div>
                <b>Контакты: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key]}/>
            })}
            </div>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>Редактировать</button>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactItem}>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}

export default ProfileInfo
