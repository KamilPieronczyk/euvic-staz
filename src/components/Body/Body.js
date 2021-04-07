import React from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'
import {FormBox} from './FormBox/FormBox'

export function Body() {
  return (
    <div className={'bodyContainer'}>
      <InfoBox />
      <FormBox />
    </div>
  )
}
