import React, { useRef, useState } from 'react'
import {Input, SubmitButton, ErrorMessage, ExitButton, VerificationMessage} from "../../../common/components"
import {EnvelopeImg} from  "../../../common/assets"
import "./ForgotPasswordBox.css"
import ForgotPassword from './ForgotPassword';

const ForgotPasswordBox = (props) => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const email = useRef("");

    async function onSubmit(){
      const response = await ForgotPassword(email.current)
      setHasSubmitted(true);
    }

    return (
        <div className='ForgotPasswordBox'>
            <div className='ExitButtonContainer'>
              <ExitButton onClick={props.onExitClick}></ExitButton>
            </div>
            <div className='inputcontainer-forgotpassword'>
              {hasSubmitted ? <VerificationMessage text="Gå in på din e-post adress för vidare instruktioner."></VerificationMessage> : <></>}
              <Input onChange={(e) => {email.current = e.target.value}} label="Email" img={EnvelopeImg}></Input>
              <SubmitButton onClick={onSubmit} text="Bekräfta"></SubmitButton>
            </div>
        </div>
      );
}

export default ForgotPasswordBox