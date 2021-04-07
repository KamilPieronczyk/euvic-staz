import React, {useState} from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'
import {FormBox} from './FormBox/FormBox'
import {Spinner} from './Spinner/Spinner'
import {FinalMessage} from './FinalMessage/FinalMessage'

export function Body() {
  const [formState, setFormState] = useState("filling")

  const renderFormState = () => {
    switch(formState){
      case 'filling':
        return <FormBox onFormSubmit={onFormSubmit} />
      case 'loading':
        return <Spinner />
      case 'success':
        return <FinalMessage success={true} />
      case 'error':
        return <FinalMessage success={false} />
      default:
        return <FormBox onFormSubmit={onFormSubmit} />
    }
  }

  const onFormSubmit = () => {
    setFormState('success')
  }

  return (
    <div className={'bodyContainer'}>
      <InfoBox />
      {renderFormState()}
    </div>
  )
}
