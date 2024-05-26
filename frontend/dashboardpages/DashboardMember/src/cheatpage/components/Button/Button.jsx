import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='Button'>{props.text}</button>
  )
}

export default Button