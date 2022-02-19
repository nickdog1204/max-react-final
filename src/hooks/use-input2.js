import {useState} from "react";

const useInput2 = (validateFn) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateFn(value);
    const hasError = isTouched && !isValid;

    const enterValueHandler = (value) => {
        setValue(value)
    }

    const setTouchedToTrueHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }
    return {
        value,
        isValid,
        hasError,
        enterValueHandler,
        setTouchedToTrueHandler,
        reset
    }

}

export default useInput2;