import React from 'react'
import './Header.css'

export function Header() {
  return (
    <div className={"container"}>
      <img src="/assets/logo.png" alt="NextTrip"/>
      <div>
        <span>call us</span>
        <span className={"spacer"}></span>
        <span>1-888-444-5555</span>
      </div>
    </div>
  )
}
