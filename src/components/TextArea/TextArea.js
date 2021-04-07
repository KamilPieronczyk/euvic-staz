import React, {useState} from 'react'
import './TextArea.css'
import {PropTypes} from 'prop-types'
import Fade from 'react-reveal/Fade'

function TextArea(props) {
  const [value, setValue] = useState("")

  const inputHandle = (e) => {
    props.onChange(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div className={"inputContainer"}>

      <span className={"inputLabel"}>{props.label} <span className={"red"}>*</span></span>
      <textarea
        className={"textArea " + (props.isValid ? "" : "invalid")}
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

TextArea.propTypes = {
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string
}

TextArea.defaultProps = {
  isValid: true,
  type: 'text',
  onChange: () => {},
}

export {TextArea};
