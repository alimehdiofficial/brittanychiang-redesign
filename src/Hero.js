import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <span>Hi, my name is</span>
      <h1 className='hero__title'>Brittany Chiang.</h1>
      <h1 className='hero__subtitle'>I build things for the web.</h1>
      <p>
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <a href='mailto: stevef7fywmrp@gmail.com'>
        <button>Get In Touch</button>
      </a>
    </div>
  )
}

export default Hero
