import React from 'react'
import './Header.css'

export function Header() {
  return (
    <header className={"headerContainer"}>
      <img src="/assets/logo.png" alt="NextTrip"/>
      <div>
        <span>call us</span>
        <span className={"spacer"}></span>
        <span itemProp="telephone">1-888-444-5555</span>
      </div>
    </header>
  )
}
