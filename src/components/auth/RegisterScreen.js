import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    // hook de react-redux para hacer dispatch en cualquier parte de la aplicacion
    const dispatch = useDispatch();

    // hook de react-redux para obtener los datos del state de la aplicacion
    const { msgError } = useSelector(state => state.ui);

    const [{ name, email, password, password2 }, handleInputChange] = useForm({
        name: 'Hernando',
        email: 'nando@ubuntu.com',
        password: '123456',
        password2: '123456'
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {

            dispatch(startRegisterEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email es not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password must be at least 6 characters and match other'));
            return false
        }

        dispatch(removeError());

        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleSubmit}>
                {
                    msgError && (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                />
                <label htmlFor="">Confirm Password</label>
                <input
                    type="password"
                    name="confirm2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5">
                    Register
                </button>
                <Link to="/auth/login" className="link">Already register?</Link>
            </form>

        </div>
    )
}
