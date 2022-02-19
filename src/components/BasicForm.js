import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: isFirstNameValid,
        hasError: firstNameInputHasError,
        enterValueHandler: enterFirstNameIntoInputFn,
        setTouchedToTrueHandler: setFirstNameTouchedFn,
        reset: resetFirstNameInputFn
    } = useInput2(it => it.trim() !== '');
    const {
        value: enteredLastName,
        isValid: isLastNameValid,
        hasError: lastNameInputHasError,
        enterValueHandler: enterLastNameIntoInputFn,
        setTouchedToTrueHandler: setLastNameTouchedFn,
        reset: resetLastNameInputFn
    } = useInput2(it => it.trim() !== '');
    const {
        value: enteredEmail,
        isValid: isEmailValid,
        hasError: emailInputHasError,
        enterValueHandler: enterEmailIntoInputFn,
        setTouchedToTrueHandler: setEmailTouchedFn,
        reset: resetEmailInputFn
    } = useInput2(it => it.includes("@"));
    let formIsValid = false;
    if (isFirstNameValid && isLastNameValid && isEmailValid) {
        formIsValid = true;
    }
    const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    const formSubmissionHandler = event => {
        event.preventDefault();
        if(!formIsValid) {
            return;
        }
        const data = {
            enteredFirstName,
            enteredLastName,
            enteredEmail
        }
        console.log(data);
        resetFirstNameInputFn();
        resetLastNameInputFn();
        resetEmailInputFn();
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='name'
                        value={enteredFirstName}
                        onChange={(event) => enterFirstNameIntoInputFn(event.target.value)}
                        onBlur={(event) => setFirstNameTouchedFn()}
                    />
                    {firstNameInputHasError && <p className="error-text">名字不能為空</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'
                           value={enteredLastName}
                           onChange={(event) => enterLastNameIntoInputFn(event.target.value)}
                           onBlur={(event) => setLastNameTouchedFn()}
                    />
                    {lastNameInputHasError && <p className="error-text">姓氏不能為空</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name'
                       value={enteredEmail}
                       onChange={(event) => enterEmailIntoInputFn(event.target.value)}
                       onBlur={(event) => setEmailTouchedFn()}
                />
                {lastNameInputHasError && <p className="error-text">Email必須包含@</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
