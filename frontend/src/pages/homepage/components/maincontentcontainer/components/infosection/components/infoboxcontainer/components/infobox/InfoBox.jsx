import React from 'react'
import "./InfoBox.css"

const InfoBox = (props) => {
  return (
    <div className='InfoBox'>
      <img className="InfoBox-Icon" src={props.imgsrc}></img>
      <h className="InfoBox-HeaderText">{props.title}</h>
      <p className="InfoBox-Text">{props.text}</p>
    </div>
  )
}

export default InfoBox