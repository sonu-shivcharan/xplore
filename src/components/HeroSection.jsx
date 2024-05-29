import React from 'react'
import './../styles/Hero.css'

const HeroSection = () => {
   
  return (
    <div id='hero-section' className='flex'>
       <div className="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../images/dpu.png" alt="Image 1" />
                </div>
                <div className="carousel-item">
                    <img src="../images/tshirt4.jpg" alt="Image 2" />
                </div>
                <div className="carousel-item">
                    <img src="../images/sunnysir.png" alt="Image 3" />
                </div>
            </div>
            {/* Navigation buttons and other carousel elements */}
        </div>
    </div>
  )
}

export default HeroSection

