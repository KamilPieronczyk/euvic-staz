import React from 'react'
import './Spinner.css'

import {PongSpinner} from 'react-spinners-kit'

export function Spinner() {
  return (
    <div className={"spinnerContainer"}>
      <PongSpinner color={"#2477CB"} size={50} />
      <span>Message sending, please wait</span>
    </div>
  )
}
