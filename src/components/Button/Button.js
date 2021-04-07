import React from 'react'
import './Button.css'

import {PropTypes} from 'prop-types'

function Button(props) {
  const { disabled } = props

  return (
    <div
      className={"buttonContainer " + (disabled ? 'buttonDisabled' : '')}
      onClick={!disabled ? props.onClick : ()=>{}}
    >
      Send
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false
}

export {Button}
