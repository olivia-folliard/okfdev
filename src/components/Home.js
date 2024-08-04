import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <div>Welcome</div>
            <button><Link to="/about">About</Link></button>
        </div>
    )
}

export default Home;