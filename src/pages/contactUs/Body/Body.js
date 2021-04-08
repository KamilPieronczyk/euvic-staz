import React, {useState} from 'react'
import './Body.css'
import {InfoBox} from './InfoBox/InfoBox'
import {FormBox} from './FormBox/FormBox'
import {Spinner} from './Spinner/Spinner'
import {FinalMessage} from './FinalMessage/FinalMessage'

import axios from 'axios'

const API = {
  success: "https://drl75hzgm7.api.quickmocker.com/success",
  error: "https://drl75hzgm7.api.quickmocker.com/error",
}

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
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }

    //API.error returns an error from an api
    //axios.post(API.error, {headers, data})
    axios.post(API.success, {headers, data})
      .then(response => {
        setFormState('success')
        console.info('response', response)
      })
      .catch(error => {
        setFormState('error')
        console.error('error', error)
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
