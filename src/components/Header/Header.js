import React from 'react'
import './Header.css'

export function Header() {
  return (
    <header className={"headerContainer"}>
      <img src="/assets/logo.png" alt="NextTrip"/>
      <div>
        <a href="tel:+1888444555">
          <span>call us</span>
          <span className={"spacer"}></span>
          <span itemProp="telephone">1-888-444-5555</span>
        </a>
      </div>
    </header>
  )
}
