import React from 'react'
import './FormBox.css'

import {Input} from '../../Input/Input'

export function FormBox() {
  return (
    <section className={"formBoxContainer"}>
      <h1>Email Us</h1>
      <Input
        label="Email"
        type={"email"}
        placeholder="Enter your email"
        isValid={true}
        errorMessage="Email is invalid"
      />
      <Input
        label="Subject"
        type={"text"}
        placeholder="Enter subject"
        isValid={true}
        errorMessage="This value is required"
      />
    </section>
  )
}
