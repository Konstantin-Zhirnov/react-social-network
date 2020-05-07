import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.sass'

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            {createField("Email", 'email', Input, [required])}
            {createField("Password", 'password', Input, [required], {type: "password"})}
            {createField(null, 'rememberMe', Input, [], {type: "checkbox"}, 'Запомнить меня')}

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
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Форма авторизации</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)