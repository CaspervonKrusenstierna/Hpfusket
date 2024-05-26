import React from 'react'
import "./BackButton.css"
import { BackImg } from '../assets'

const BackButton = (props) => {
    return (
        <button className='ExitButton' onClick={props.onClick}><img src={BackImg}></img></button>
      )
}

export default BackButton