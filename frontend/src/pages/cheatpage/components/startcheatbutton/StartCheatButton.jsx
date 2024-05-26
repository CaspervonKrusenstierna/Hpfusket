import React from 'react'
import "./StartCheatButton.css"

const StartCheatButton = (props) => {
  return (
    <button onClick={props.onClick} className='StartCheatButton'>{props.text}</button>
  )
}

export default StartCheatButton