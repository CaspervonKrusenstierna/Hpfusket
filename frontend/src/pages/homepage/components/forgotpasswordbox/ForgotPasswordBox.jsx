import React, { useRef, useState } from 'react'
import { ExitButton} from '../../../../shared/components';
import VerificationMessage from "./verificationmessage/VerificationMessage";
import { EnvelopeImg } from '../../../../shared/assets';
import "./ForgotPasswordBox.css"
import ForgotPassword from './ForgotPassword';
import {LogRegButton, Input} from '../index';

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
              <LogRegButton onClick={onSubmit} text="Bekräfta"></LogRegButton>
            </div>
        </div>
      );
}

export default ForgotPasswordBox