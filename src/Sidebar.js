import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__left'>
        <div className='sidebar__icons'>
          <a href='https://www.twitter.com' target='_blank'>
            <GitHubIcon />
          </a>
          <a href='https://www.twitter.com' target='_blank'>
            <InstagramIcon />
          </a>
          <a href='https://www.twitter.com' target='_blank'>
            <TwitterIcon />
          </a>
          <a href='https://www.twitter.com' target='_blank'>
            <LinkedInIcon />
          </a>
        </div>
        {/* <div className='sidebar--vertical'></div> */}
      </div>
      <div className='sidebar__right'>
        <div className='sidebar__email'>
          <p>stevef7fywmrp@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
