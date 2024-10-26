import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import { signup } from '../../redux/slices/authSlice';
import './Signup.css'




export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [ gender, setGender] = useState("")

    const dispatch = useDispatch()
    
    
    const handleSignup = () => {
        let user = {
            email,
            password,
            name,
            phone,
            address,
            gender
        }
        console.log("Signup clicked",user);
       dispatch(signup(user))    
    }


  return (
    // <div>
    // <h1>Signup</h1>
    // <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
    // <br/>
    // <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
    // <br/>
    // <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
    // <br/>
    // <input type="text" placeholder="phone" onChange={(e)=> setPhone(e.target.value)}/>
    // <br/>
    // <input type="text" placeholder="address" onChange={(e)=> setAddress(e.target.value)}/>
    // <br/>
    // <label>Male</label>
    // <input type="radio" name="gender" value="male" onChange={()=> setGender("male")}/>
    // <br/>
    // <label>Female</label>
    // <input type="radio" name="gender" value="female"  onChange={()=> setGender("female")} />
    // <br/>
    // <button onClick={handleSignup}>Signup</button>
    // </div>
<div className='body'>
    <div className="container">
    <div className="signup-form"  >
      <h2>Signup</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} required placeholder="Enter your name"/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Enter your email"/>
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required placeholder="Enter your password" minLength="6"/>

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" onChange={(e)=> setPhone(e.target.value)} required placeholder="Enter your phone number" pattern="[0-9]{10}"/>
      
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" onChange={(e)=> setAddress(e.target.value)} required placeholder="Enter your address"/>
      
      <div className="gender">
        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="male" onChange={()=> setGender("male")} required/> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female"onChange={()=> setGender("female")}/> Female
          </label>
        </div>
      </div>
      
      <button onClick={handleSignup}>Signup</button>
    </div>
  </div>
  </div>
  )
}
