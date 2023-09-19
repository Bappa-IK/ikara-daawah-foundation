import React from 'react'
import logo from '../images/logo.jpg'

import { Link } from "react-router-dom";
  
import { useState } from 'react'


export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    function toggling(){
        const element = document.getElementById("toggle")
        element.classList.toggle("active")
        setToggle(prevToggle => !prevToggle)
    }
  return (
    <div>
            <nav className='navbar'>
                <div className='image--container'>
                    <img src={logo} alt="logo" className='navbar--logo'/>
                </div>            
                <ul className='menu'>
                    <li className='menu--item'><Link className='menu--item' to='/'>Home</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/about'>About us</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/media'>Media</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/contact'>Contact us</Link></li>
                    <a href="/contact"><button className='donate'>Donate </button></a>
                </ul>
                <div className="toggle" id='toggle' onClick={toggling}>
                    <span></span>
                    <span></span>
                </div>            
            </nav>
        
            <div className={toggle ? 'dropdown' : 'hidden'}>
                <ul className='toggle--menu'>
                    <li className='menu--item'><Link className='menu--item' to='/'>Home</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/about'>About us</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/media'>Media</Link></li>
                    <li className='menu--item'><Link className='menu--item' to='/contact'>Contact us</Link></li>
                    <a href="/contact"><button className='donate'>Donate </button></a>
                </ul>
            </div>
    </div>
  )
}
