import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    return (
        <div className='home'>
            <div className='left-column'>
                <header>Welcome, I'm Olivia</header>
                <div className='typewriter'>
                    <h1>
                        I like to 
                        <Typewriter 
                            words={[" code", " travel", " learn", " exercise", " give back", " cook"]} 
                            //loop={false}
                        />
                    </h1>
                </div>
            </div>
            <div className='right-column'>
                <button><Link to="/about">About Me</Link></button>
                <button><Link to="/contact">Contact Info</Link></button>
                <button><Link to="/projects">My Projects</Link></button>
            </div>
        </div>
    )
}

export default Home;