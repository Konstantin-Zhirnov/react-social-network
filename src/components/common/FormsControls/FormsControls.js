import React from "react";
import styles from './FormsControls.module.sass'
import {Field} from "redux-form";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const createField = (placeholder, name, component, validate, props, text = '') => (
    <div className={styles.formItem}><Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} /><div className={styles.formText}><p>{text}</p></div></div>
)