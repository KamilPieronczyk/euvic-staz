import React from 'react'
import './Footer.css'
import {FooterMenu} from './FooterMenu/FooterMenu'

export function Footer() {
  return (
    <footer className={"footerContainer"}>
      <FooterMenu />
      <div id="footerRights">
        <p>@2021 NextTrip. All rights reserved</p>
      </div>
    </footer>
  )
}
