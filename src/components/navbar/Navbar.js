import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div class="navbar">
        <div class="logo">
            <a href="#">Social Media App</a>
        </div>
        <div class="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div class="menu"><i class="fa-solid fa-bars"></i></div>
        </div>
        <a href="#" class="highlight">Sign up/Login</a>
        {/* <div class="dropdown-menu">
            <ul>
            <li><a href="#">Home</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div> */}
    </div>
  )
}
