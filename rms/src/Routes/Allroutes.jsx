import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from '../components/Home'
import  Signup  from '../components/Signup'
import Login from '../components/Login'
export default function Allroutes() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
           <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/Login' element= {<Login/>}/>
                <Route path='/signup' element= {<Signup/>}/>
        
        
           </Routes>
    
    </BrowserRouter>
    
    </>
        
      
  )
}
