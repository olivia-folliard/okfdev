import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <header>Welcome</header>
            <button><Link to="/about">About Me</Link></button>
            <button><Link to="/contact">Contact Info</Link></button>
            <button><Link to="/projects">My Projects</Link></button>
        </div>
    )
}

export default Home;