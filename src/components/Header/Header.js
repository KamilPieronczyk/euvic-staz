import React from 'react'
import './Header.css'

export function Header() {
  return (
    <header className={"headerContainer"}>
      <img src="/assets/logo.png" alt="NextTrip"/>
      <div>
        <span>call us</span>
        <span className={"spacer"}></span>
        <span itemProp="telephone"><a href="tel:+1888444555">1-888-444-5555</a></span>
      </div>
    </header>
  )
}
