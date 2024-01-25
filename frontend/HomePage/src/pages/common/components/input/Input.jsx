import React from 'react'
import "./Input.css"

const Input = (props) => {
  return (
    <div className='Input'>
        <div className='Input-iconcontainer'>
          <img className="Input-icon" src={props.img}></img>
        </div>
        <h className='Input-label'>{props.label}</h>
        <input className='Input-input' onChange={props.onChange}></input>
    </div>
  )
}

export default Input