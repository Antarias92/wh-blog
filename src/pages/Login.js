import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>{

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })
    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post("/auth/login", inputs)
            navigate("/wh-blog")
        }catch(err){
           setError(err.response.data)
        }
        
    }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required name='username' onChange={handleChange}/>
                <input className='inputBox' type='password' placeholder='password' required name='username' onChange={handleChange}/>
                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                {err&&<p>{err}</p>}
                <span className='inputFooter'>Create and account <Link to="/register">Here</Link></span>
            </form>
        </div>
    )
}

export default Login