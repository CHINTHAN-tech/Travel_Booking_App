import React from 'react'
import { Link } from 'react-router-dom'
import {  Airplane } from "phosphor-react"
import './navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/form">Book Tickets</Link>
            <Link to="/cart">
                <Airplane size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar

