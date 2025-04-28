import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required/>
                <input className='inputBox' type='email' placeholder='email' required/>
                <input className='inputBox' type='password' placeholder='password' required/>
                <button className='btn btn-primary'>Register</button>
                <span className="inputFooter">Have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;