import React from 'react'
import "./ContinueButton.css"

const ContinueButton = (props) => {
  return (
    <button onClick={() => {props.onClick(props.id)}} className='ContinueButton'>Fortsätt</button>
  )
}

export default ContinueButton