import React from 'react'
import "./PaymentOption.css"

const PaymentOption = (props) => {
  return (
    <button className='PaymentOption' onClick={props.onClick}>
        <img className="PaymentOption-img" src={props.img}></img>
        <input className="PaymentOption-Input" type="checkbox" checked={props.value}></input>
    </button>
  )
}

export default PaymentOption
