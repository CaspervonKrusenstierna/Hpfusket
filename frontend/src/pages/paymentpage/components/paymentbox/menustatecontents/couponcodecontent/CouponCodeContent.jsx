import React from 'react'
import { BackButton, ContinueButton, ExitButton} from '../../../../../../shared/components'
import ReferralCodeInput from "./referralcodeinput/ReferralCodeInput"

const CouponCodeContent = (props) => {
  return (
    <>
        <div className='BackExitButtonContainer'>
            <BackButton onClick={props.onBack}></BackButton>
            <ExitButton onClick={props.onExit}></ExitButton>
        </div>
        <div className='PaymentBox-ContentContainer'>
            <div className='PaymentBox-ReferralContainer'>
            <h style={{fontSize: "20px", fontWeight:"700"}}>Rabattkod</h>
            <ReferralCodeInput onChange={(e) => {props.ReferralCode.current = e.target.value}}></ReferralCodeInput>
            </div>
            <ContinueButton onClick={props.onContinue}/>
        </div>
    </>
  )
}

export default CouponCodeContent