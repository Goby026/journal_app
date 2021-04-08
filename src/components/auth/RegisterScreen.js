import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" name="name" className="auth__input" autoComplete="off"/>
                <label htmlFor="">User</label>
                <input type="text" name="user" className="auth__input" autoComplete="off"/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" className="auth__input"/>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm" className="auth__input"/>

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
