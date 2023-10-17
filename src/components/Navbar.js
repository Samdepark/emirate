import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const showNavbar =()=>{

    }
  return (
    <header>
        <h1 className='logo'>Logo</h1>
        <nav className='header'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Cart</Link>
            <Link>SignUp</Link>
            <button onClick={showNavbar}><FaTimes/></button>
            <button onClick={showNavbar}><FaBars/></button>
        </nav>
    </header>
  )
}
  
export default Navbar