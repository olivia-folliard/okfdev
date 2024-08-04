import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left'>
                <Link to="/">Olivia Folliard</Link>
            </div>
            <ul className='right'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;