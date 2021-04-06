import React from 'react'
import './Footer.css'
import {FooterMenu} from './FooterMenu/FooterMenu'

export function Footer() {
  return (
    <footer className={"footerContainer"}>

      <div className={"footerImg"}>
        <img src="/assets/background.jpg" alt="Sea"/>
      </div>

      <FooterMenu />

      <div id="footerRights">
        <p>@2021 NextTrip. All rights reserved</p>
      </div>

    </footer>
  )
}
