import React from 'react'
import './FormBox.css'

import {Input, Button, TextArea} from '../../../../components'

export function FormBox() {
  return (
    <section className={"formBoxContainer"}>

      <h1>Email Us</h1>

      <Input
        label="Email"
        type={"email"}
        placeholder="Enter your email"
        isValid={false}
        errorMessage="Email is invalid"
      />

      <Input
        label="Subject"
        type={"text"}
        placeholder="Enter subject"
        isValid={false}
        errorMessage="This value is required"
      />

      <TextArea
        label="Comment"
        placeholder="Write your comment"
        isValid={false}
        errorMessage="This value is required"
      />

      <Button />

    </section>
  )
}
