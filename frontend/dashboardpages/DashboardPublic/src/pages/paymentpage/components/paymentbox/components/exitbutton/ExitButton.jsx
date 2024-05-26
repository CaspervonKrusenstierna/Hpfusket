import React from 'react'
import "./ExitButton.css"
import { ExitImg } from "../../../../../../common/assets"
const ExitButton = (props) => {
  return (
    <button className='ExitButton' onClick={props.onClick}><img src={ExitImg}></img></button>
  )
}

export default ExitButton