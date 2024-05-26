import React from 'react'
import "./LogRegButton.css"

const LogRegButton = (props) => {
  return (
    <button onClick={props.onClick} className='LogRegButton'>{props.text}</button>
  )
}

export default LogRegButton