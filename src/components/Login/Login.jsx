import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.sass'
import style from './Login.module.sass'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>

            {createField("Email", 'email', Input, [required])}
            {createField("Password", 'password', Input, [required], {type: "password"})}
            {createField(null, 'rememberMe', Input, [], {type: "checkbox"}, 'Запомнить меня')}

            {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
            {captchaUrl &&  createField('Введите символы', 'captcha', Input, [required], {})}

            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={style.formBlock}>
        <h1>Форма авторизации</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)