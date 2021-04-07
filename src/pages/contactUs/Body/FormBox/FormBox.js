import React, {useState, useEffect, useRef} from 'react'
import './FormBox.css'

import {Input, Button, TextArea} from '../../../../components'

import validator from 'validator'
import ReCAPTCHA from "react-google-recaptcha";
import Fade from 'react-reveal/Fade'

const errorMessages = {
  emptyInput: 'This value is required.',
  invalidEmail: 'Email is invalid',
  tooShort: 'The value is too short, it should contains at least 6 letters'
}

export function FormBox() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")
  const [emailValidation, setEmailValidation] = useState({isValid: true, errorMessage: ""})
  const [subjectValidation, setSubjectValidation] = useState({isValid: true, errorMessage: ""})
  const [commentValidation, setCommentValidation] = useState({isValid: true, errorMessage: ""})
  const [captcha, setCaptcha] = useState(true)
  const [isFormValid, setIsFormValid] = useState(true)
  const captchaRef = useRef()

  useEffect(() => {
    checkFieldsValidation()
  }, [email, subject, comment, emailValidation, subjectValidation, commentValidation])

  const validateForm = () => {
    return validateEmail() &&
    validateText(subject, setSubjectValidation) &&
    validateText(comment, setCommentValidation)
  }

  const checkFieldsValidation = () => {
    if(emailValidation.isValid &&
      subjectValidation.isValid &&
      commentValidation.isValid
      )
      setIsFormValid(true)
    else
      setIsFormValid(false)
  }

  const validateEmail = () => {
    if(validator.isEmpty(email)){
      setEmailValidation({
        isValid: false,
        errorMessage: errorMessages.emptyInput
      })
      return false
    }

    if(!validator.isEmail(email)){
      setEmailValidation({
        isValid: false,
        errorMessage: errorMessages.invalidEmail
      })
      return false
    }

    setEmailValidation({isValid: true, errorMessage: ''})
    return true
  }

  const validateText = (value, setValidation) => {

    if(validator.isEmpty(value)){
      setValidation({
        isValid: false,
        errorMessage: errorMessages.emptyInput
      })
      return false
    }

    if(value.length < 6) {
      setValidation({
        isValid: false,
        errorMessage: errorMessages.tooShort
      })
      return false
    }

    setValidation({ isValid: true, errorMessage: '' })
    return true
  }

  const clearErrorMessage = (setValidation) => setValidation({isValid: true, errorMessage: ''})

  const onCaptchaChange = (captcha) => {

    if(captcha.length > 0) //not correct, temporary solution
      setCaptcha(true)
    else
      setCaptcha(false)
  }

  const onSubmit = () => {
    if(!validateForm()) return
    checkFieldsValidation()
    onCaptchaChange(captchaRef.current.getValue())
    if(!captcha) return
    if(isFormValid) {
      console.log('send')
    }
  }

  return (
    <section className={"formBoxContainer"}>

      <h1>Email Us</h1>

      <Input
        label="Email"
        type={"email"}
        placeholder="Enter your email"
        isValid={emailValidation.isValid}
        errorMessage={emailValidation.errorMessage}
        onChange={setEmail}
        onBlur={()=>validateEmail(email)}
        onFocus={()=>clearErrorMessage(setEmailValidation)}
      />

      <Input
        label="Subject"
        type={"text"}
        placeholder="Enter subject"
        isValid={subjectValidation.isValid}
        errorMessage={subjectValidation.errorMessage}
        onChange={setSubject}
        onBlur={()=>validateText(subject, setSubjectValidation)}
        onFocus={()=>clearErrorMessage(setSubjectValidation)}
      />

      <TextArea
        label="Comment"
        placeholder="Write your comment"
        isValid={commentValidation.isValid}
        errorMessage={commentValidation.errorMessage}
        onChange={setComment}
        onBlur={()=>validateText(comment, setCommentValidation)}
        onFocus={()=>clearErrorMessage(setCommentValidation)}
      />

      <ReCAPTCHA
        sitekey={"6LfWh6AaAAAAAJUjyAifJPbBL3XHMlfg2txTJiA7"}
        onChange={onCaptchaChange}
        ref={captchaRef}
      />

      {captcha ? null : (
        <Fade>
          <span className={"red"}>{errorMessages.emptyInput}</span>
        </Fade>
      )}

      <Button disabled={!isFormValid} onClick={onSubmit} />

    </section>
  )
}
