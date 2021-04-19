import { useState } from "react";


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    // resetear formulario
    const reset = () => {
        setValues(initialState);
    }

    //setear los campos del formulario, se desestructura {target} de los eventos (e) que envia automaticamente un input html
    const handleInputChange = ({ target }) => {

        setValues({ ...values, [target.name]: target.value });
    }

    return [values, handleInputChange, reset];
}