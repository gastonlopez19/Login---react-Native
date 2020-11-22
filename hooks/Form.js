import { useState } from 'react';

export default (initialState, OnSubmit) => {

    const [inputs, setInputs] = useState(initialState);

    const subscribe = field => val => {
        setInputs({ ...inputs, [field]: val })
    };

    const handleSubmit = () => {
        OnSubmit(inputs);
    }

    return { subscribe, inputs, handleSubmit }
}