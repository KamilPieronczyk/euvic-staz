import React from 'react'
import './FooterMenu.css'

export function FooterMenu() {
  return (
    <div id="footerMenu">

      <div>
        <a href="#">
          <img src="/assets/N_Icon.png" alt=""/>
        </a>
      </div>

      <div>
        <a href="#">
          Contact Us
        </a>
      </div>

      <div>
        <a href="#">
          Privacy policy
        </a>
      </div>

      <div>
        <a href="#">
          <img src="/assets/FacebookIcon.png" className={"mr-5"} alt=""/>
        </a>
        <a href="#">
          <img src="/assets/InstagramIcon.png" alt=""/>
        </a>
      </div>

    </div>
  )
}
