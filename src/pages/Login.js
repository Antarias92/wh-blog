import React from 'react';
import {Link} from 'react-router-dom';

const Login = () =>{
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required/>
                <input className='inputBox' type='password' placeholder='password' required/>
                <button className='btn btn-primary'>Login</button>
                <span className='inputFooter'>Create and account <Link to="/register">Here</Link></span>
            </form>
        </div>
    )
}

export default Login