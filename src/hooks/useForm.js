import { useState } from 'react';

function useForm(InitialValues) {
    const [values, setValues] = useState(InitialValues)
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value, // name: 'value'
        });
    }
    function handleOnChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value,
        );
    }

    return {
        values,
        handleOnChange,
    };
}

export default useForm;