import React from 'react'
import './../styles/Hero.css'

const HeroSection = () => {

    return (
        <div id='hero-section' className='flex'>
            <video id="hero-vid" autoPlay="true" loop="true" >
                <source src="/hero.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default HeroSection

