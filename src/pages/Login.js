import React from 'react';
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../Context/authContext';

const Login = () =>{

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/home")
        }catch(err){
           setError(err.response.data)
        }
        
    }

    return (
        <div className='auth'>
            <h1 style={{color: "#ffffff"}}>Login</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required name='username' onChange={handleChange}/>
                <input className='inputBox' type='password' placeholder='password' required name='password' onChange={handleChange}/>
                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                {err&&<p className='errorMessage'>{err}</p>}
                <span className='inputFooter'>Create and account: <Link to="/register">Here</Link></span>
            </form>
        </div>
    )
}

export default Login