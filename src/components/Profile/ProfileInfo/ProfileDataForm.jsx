import React from "react";
import s from "./ProfileInfo.module.sass";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "../../common/FormsControls/FormsControls.module.sass";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <b>Логин: </b>{createField('Логин', 'fullName', Input,[], )}
            </div>
            <div>
                <b>Ищу работу: </b>
                {createField('', 'lookingForAJob', Input,[], {type: 'checkbox'})}
            </div>

            <div>
                <b>Профессиональные навыки: </b>
                {createField('Профессиональные навыки:', 'lookingForAJobDescription', Textarea,[])}
            </div>

            <div>
                <b>Обо мне: </b>
                {createField('Обо мне:', 'aboutMe', Textarea,[])}
            </div>
            <div>
                <b>Контакты: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b> {createField(key, 'contacts.' + key, Input,[], {type: 'checkbox'})}
                </div>
            })}
            </div>
            <div><button>Сохранить</button></div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm