import React from 'react'
import "./ReferralCodeInput.css"

const ReferralCodeInput = (props) => {
  return (
    <input onChange={props.onChange} className='ReferralCodeInput'></input>
  )
}

export default ReferralCodeInput