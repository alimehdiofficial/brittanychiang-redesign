import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'

function Contact() {
  return (
    <Element id='/contact'>
      <div className='contact'>
        <div className='contact__title'>
          <p>04. What's Next?</p>
          <h1>Get In Touch</h1>
        </div>
        <div className='contact__info'>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>
        <a href='mailto: stevef7fywmrp@gmail.com'>
          <button>Say Hello</button>
        </a>
      </div>
    </Element>
  )
}

export default Contact
