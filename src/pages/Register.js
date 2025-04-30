import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
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
            await axios.post("/auth/register", inputs)
            navigate("/wh-blog")
        }catch(err){
           setError(err.response.data)
        }
        
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form className='loginForm'>
                <input className='inputBox' type='text' placeholder='username' required name="username" onChange={handleChange}/>
                <input className='inputBox' type='email' placeholder='email' required name="email" onChange={handleChange}/>
                <input className='inputBox' type='password' placeholder='password' required name="password" onChange={handleChange}/>
                <div className="mb-2 d-flex form-check justify-content-between">
                    <input type="checkbox" className="form-check-input" required />
                    <label htmlFor="formcheck" className="form-check-label text secondary"><small>I agree to terms and conditions</small></label>        
                </div>
                <button className='btn btn-primary' onClick={handleSubmit}>Register</button>

                {err && <p className="errorMessage">{err}</p>}
                <span className="inputFooter">Have an account? <Link to="/wh-blog">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;