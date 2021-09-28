import React from 'react'
import { Link } from 'react-router-dom'
import video from './video1.mp4'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <button className='btn--primary'><Link to='/blogs' className='btn-link'>Get Started<i className="fas fa-suitcase-rolling"/></Link></button>
                <button className='btn--primary'><Link to='/' className='btn-link'>Explore<i className="far fa-snowflake"/></Link></button>
            </div>


        </div>
    )
}

export default HeroSection
