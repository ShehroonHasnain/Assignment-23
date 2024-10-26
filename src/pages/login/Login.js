import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'
import { Link } from 'react-router-dom'
import "./login.css"



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleLogin = ()=>{
      let user = {
        email, 
        password
      }

      dispatch(login(user))
    }
    return (

        // <div>
        //     <h1>Login Page</h1>
        //     <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        //     <br />
        //     <input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
        //     <button onClick={handleLogin}>Login</button>
        //     <br />
        //    <Link to="/signup"> <p>Create account.?</p></Link>
        // </div>
        <div className='login-box'>
        <div className="login-container">
    <h1>Login Page</h1>
     
      <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/>
      <button className='button' onClick={handleLogin}>Login</button>
    
    <div className="create-account">
      <p>Don't have an account? <Link to="/signup">Create account</Link></p>
    </div>
  </div>
  </div>
    )
}
