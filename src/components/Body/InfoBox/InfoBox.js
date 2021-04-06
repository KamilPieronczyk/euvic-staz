import React from 'react'
import './InfoBox.css'

export function InfoBox() {
  return (
    <section className={"infoBoxContainer"}>
      <figure>
        <img src="/assets/phone.svg" alt="phoneIcon"/>
        <p>1-888-444-5555</p>
      </figure>
      <h1>Need assistance?</h1>
      <p>
        For immediate assistance with your reservation, pleas call us. For general questions, you can email us. You'll receive a responsive within 2 business days.
      </p>
    </section>
  )
}
