import {useState} from "react";


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = isTouched && !enteredValueIsValid;

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const blurHandler = event => {
        setIsTouched(true)
    }
    const resetForm = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        hasError,
        enteredValueIsValid,
        changeHandler,
        blurHandler,
        resetForm
    }


}

export default useInput;