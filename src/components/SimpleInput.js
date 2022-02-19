import {useEffect, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const {
        enteredValue: enteredName,
        enteredValueIsValid: enteredNameIsValid,
        hasError: nameInputHasError,
        changeHandler: nameInputChangeHandler,
        blurHandler: nameInputBlurHandler,
        resetForm: resetNameInput
    } = useInput(it => it.trim() !== '');

    const {
        enteredValue: enteredEmail,
        enteredValueIsValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        changeHandler: emailInputChangeHandler,
        blurHandler: emailInputBlurHandler,
        resetForm: resetEmailInput
    } = useInput(it => it.includes("@"))


    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }



    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!enteredNameIsValid) {
            return;
        }
        resetNameInput();
        resetEmailInput();
    }
    const controlClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailControlClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={controlClasses}>
                <label htmlFor='name'>您的名字</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                    ref={nameInputRef}
                />
                {nameInputHasError && <p className='error-text'>輸入的值不可為空</p>}
            </div>
            <div className={emailControlClasses}>
                <label htmlFor='name'>您的電子郵件</label>
                <input
                    type='text'
                    id='name'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                    ref={nameInputRef}
                />
                {emailInputHasError && <p className='error-text'>必須包含@</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
