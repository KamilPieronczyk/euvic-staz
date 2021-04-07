import React from 'react'
import './FormBox.css'

import {Input} from '../../Input/Input'
import {TextArea} from '../../TextArea/TextArea'
import {Button} from '../../Button/Button'


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
      <TextArea
        label="Comment"
        placeholder="Write your comment"
        isValid={true}
        errorMessage="This value is required"
      />
      <Button />
    </section>
  )
}
