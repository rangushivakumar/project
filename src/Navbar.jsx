import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useGlobal } from './GlobalContext'
 
function Navbar() {
  const x = "/"
  const y = useLocation()
  const {signup_state} = useGlobal()
  return (
    <div className='navbar'>
      <div className='circle_container'>
      <div className='circle'></div>
      <h4>OLIV</h4>
      </div>

        <ul>
            <li><NavLink to= "/Home"  >HOME</NavLink></li>
            <li><NavLink to="/About"  >ABOUT</NavLink></li>
            <li><NavLink to="/Privatesales"  >PRIVATE SALE</NavLink></li>
            <li><NavLink to="/Roadmap"  >ROADMAP</NavLink></li>
            <li><NavLink to="/Contact" >CONTACT</NavLink></li>
            {!signup_state&&<li><NavLink to="/Login" >LOGIN</NavLink></li>}
            {!signup_state&&<li><NavLink to="/Signup" className={x==y.pathname ? "active":""} >SIGNUP</NavLink></li>}
            {signup_state&&<li><NavLink to="">USER</NavLink></li>}
        </ul>
    </div>
  )
}

export default Navbar