import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const [values, handleInputChange] = useForm({
        email: 'nando@ubuntu.com',
        password: '123456'
    });

    const { email, password } = values;

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleSubmit = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="">User</label>
                <input
                    type="text"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}>
                    Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleSubmit}>

                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>

                    </div>
                </div>
                <Link to="/auth/register" className="link">Create new account</Link>
            </form>

        </div>
    )
}
