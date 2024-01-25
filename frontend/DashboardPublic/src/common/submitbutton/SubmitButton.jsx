import React from 'react'
import "./SubmitButton.css"

const SubmitButton = (props) => {
  return (
    <button style={{width: props.width}}onClick={() => {props.onClick(props.id)}} className='SubmitButton'>{props.text}</button>
  )
}

export default SubmitButton