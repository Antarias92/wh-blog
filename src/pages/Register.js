import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const res = await axios.post("/auth/register", inputs)
            console.log(res);
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required name="username" onChange={handleChange}/>
                <input className='inputBox' type='email' placeholder='email' required name="email" onChange={handleChange}/>
                <input className='inputBox' type='password' placeholder='password' required name="password" onChange={handleChange}/>
                <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                <span className="inputFooter">Have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;