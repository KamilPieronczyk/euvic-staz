import React from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'

export function Body() {
  return (
    <div className={'bodyContainer'}>
      <InfoBox />
      <div style={{flex: 1}}>Right</div>
    </div>
  )
}
