import React from 'react'
import { FaEarlybirds } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

function Landing1() {
  return (
    <div className='landing-1'>
        <div className="container">

        <nav className="navbar">
            <div className="logo-icon">
                <FaEarlybirds/>
            </div>
            <div className="logo">
                Black
            </div>
            <div className="search">
                <BiSearch/>
            </div>
        </nav>

        </div>
    </div>
  )
}

export default Landing1