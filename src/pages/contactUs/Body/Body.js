import React, {useState} from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'
import {FormBox} from './FormBox/FormBox'
import {Spinner} from './Spinner/Spinner'
import {FinalMessage} from './FinalMessage/FinalMessage'

import axios from 'axios'

export function Body() {
  const [formState, setFormState] = useState("filling")

  const renderFormState = () => {
    switch(formState){
      case 'filling':
        return <FormBox onFormSubmit={onFormSubmit} />
      case 'loading':
        return <Spinner />
      case 'success':
        return <FinalMessage success={true} goBack={resetForm} />
      case 'error':
        return <FinalMessage success={false} goBack={resetForm} />
      default:
        return <FormBox onFormSubmit={onFormSubmit} />
    }
  }

  const onFormSubmit = (email, subject, comment) => {
    setFormState('loading')
    const data = {email, subject, comment}
    axios.post('https://reqbin.com/echo/post/form', data)
      .then(response => {
        setFormState('success')
      })
      .catch(error => {
        setFormState('error')
      })
  }

  const resetForm = () => {
    setFormState('filling')
  }

  return (
    <div className={'bodyContainer'}>
      <InfoBox />
      {renderFormState()}
    </div>
  )
}
