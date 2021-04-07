import React, {useState} from 'react'
import './Input.css'
import {PropTypes} from 'prop-types'
import Fade from 'react-reveal/Fade'

function Input(props) {
  const [value, setValue] = useState("")

  const inputHandle = (e) => {
    props.onChange(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div className={"inputContainer"}>

      <span className={"inputLabel"}>{props.label} <span className={"red"}>*</span></span>
      <input
        type={props.type}
        className={"formInput " + (props.isValid ? "" : "invalid")}
        value={value}
        placeholder={props.placeholder}
        onChange={inputHandle}
      />

      {
        !props.isValid ? (
          <Fade right>
            <span className={"inputBottomLabel"}>{props.errorMessage}</span>
          </Fade>
        ) : null
      }

      {
        !props.isValid ? (
          <Fade top>
            <figure className={"invalidIcon"}>
              <img src="/assets/warningIcon.png" alt="warning" />
            </figure>
          </Fade>
        ) : null
      }

    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string
}

Input.defaultProps = {
  isValid: true,
  type: 'text',
  onChange: () => {},
}

export {Input};