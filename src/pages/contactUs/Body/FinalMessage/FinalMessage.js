import React from 'react'
import './FinalMessage.css'
import {PropTypes} from 'prop-types'
import Fade from 'react-reveal/Fade'
import { Button } from '../../../../components'

function FinalMessage(props) {
  const { success, goBack } = props

  if (success)
    return (
      <Fade>
        <div className={"finalMessageContainer"}>
          <img src="/assets/okIcon.svg" alt="success" />
          <h3>Thank you</h3>
          <p>Your comment has been send successfully</p>
        </div>
      </Fade>
    )

  return (
    <Fade>
      <div className={"finalMessageContainer"}>
        <img src="/assets/warningIcon.png" alt="error"/>
        <h3>Ups!</h3>
        <p>Something went wrong, please try again later</p>
        <Button onClick={goBack}>Back</Button>
      </div>
    </Fade>
  )
}

FinalMessage.propTypes = {
  success: PropTypes.bool,
  goBack: PropTypes.func
}

FinalMessage.defaultProps = {
  success: false,
  goBack: () => {}
}

export {FinalMessage}
