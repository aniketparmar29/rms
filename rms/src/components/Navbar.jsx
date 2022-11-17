import React from 'react'
import "./Navbar.css"
import{Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='nav'>
      
            
            <Link to='/'>HOME</Link>
            <Link to='/Login'>LOGIN</Link>
            <Link to='/Signup'>SIGNUP</Link>
            
         
    </div>
  )
}
