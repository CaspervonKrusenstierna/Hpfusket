import React from 'react'
import { BackButton, ExitButton } from '../../../../../../shared/components'
const PaymentContent = (props) => {
  return (
    <>
    <div className='BackExitButtonContainer'>
        <BackButton onClick={props.onBack}></BackButton>
        <ExitButton onClick={props.onExit}></ExitButton>
    </div>
    <h className="PaymentBox-Title"></h>
    <div className='PaymentBox-ContentContainer'>
    </div>
    </>
  )
}

export default PaymentContent