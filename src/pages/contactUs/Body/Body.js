import React from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'
import {FormBox} from './FormBox/FormBox'
import {Spinner} from './Spinner/Spinner'
import {FinalMessage} from './FinalMessage/FinalMessage'

export function Body() {
  return (
    <div className={'bodyContainer'}>
      <InfoBox />
      <FormBox />
      {/* <Spinner /> */}
      {/* <FinalMessage /> */}
    </div>
  )
}
