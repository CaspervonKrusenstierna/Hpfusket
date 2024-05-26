import React from 'react'
import "./PaymentBox.css"
import ExitButton from './components/exitbutton/ExitButton'
import { useState } from 'react'
import { useEffect } from 'react'
import SubmitButton from '../../../../common/submitbutton/SubmitButton'
import PaymentOption from './components/paymentoption/PaymentOption'
import { BitcoinImg, MoneroImg } from '../../../../common/assets'
import ContinueButton from './components/continuebutton/ContinueButton'
import ReferralCodeInput from './components/referralcodeinput/ReferralCodeInput'
import BackButton from '../../../../common/backbutton/BackButton'
let ReferralCode;

const PaymentBox = (props) => {
    const [menuState, setMenuState] = useState(0);
    const [content, setContent] = useState(<></>);
    const [selectedPayment, setSelectedPayment] = useState(0)
    
    function onBitcoinClick(){
        setSelectedPayment(1)
    }
    function onMoneroClick(){
        setSelectedPayment(2);
    }
    function onSubmitPaymentOption(){
        setMenuState(1);
    }
    function onSubmitReferralCode(){
        setMenuState(2);
        console.log(ReferralCode);
    }
    useEffect(() => {
        switch(menuState){
        case 0:
            setContent(
                <>
                    <div className='ExitButtonContainer'>
                        <ExitButton onClick={props.onExit}></ExitButton>
                    </div>
                    <div className='PaymentBox-ContentContainer'>
                        <h className="PaymentBox-Title">Betalningsmetod</h>
                        <div className='PaymentBox-PaymentOptionContainer'>
                            <PaymentOption img={BitcoinImg} value={selectedPayment == 1} onClick={() => onBitcoinClick}></PaymentOption>
                            <PaymentOption img={MoneroImg} value={selectedPayment == 2} onClick={() => onMoneroClick}></PaymentOption>
                        </div>
                        <ContinueButton onClick={() => {onSubmitPaymentOption();}}>
                        </ContinueButton>
                    </div>
                </>
            );
            break;
        case 1:
            setContent(
            <>
            <div className='BackExitButtonContainer'>
                <BackButton onClick={() => {setMenuState(menuState-1)}}></BackButton>
                <ExitButton onClick={props.onExit}></ExitButton>
            </div>
            <div className='PaymentBox-ContentContainer'>
                <div className='PaymentBox-ReferralContainer'>
                <h style={{fontSize: "20px", fontWeight:"700"}}>Rabattkod</h>
                <ReferralCodeInput onChange={(e) => {ReferralCode = e.target.value}}></ReferralCodeInput>
                </div>
                <ContinueButton onClick={() => {onSubmitReferralCode();}}>
                </ContinueButton>
            </div>
            </>);
            break;
        case 2:
            setContent(
                <>
                <div className='BackExitButtonContainer'>
                    <BackButton onClick={() => {setMenuState(menuState-1)}}></BackButton>
                    <ExitButton onClick={props.onExit}></ExitButton>
                </div>
                <h className="PaymentBox-Title"></h>
                <div className='PaymentBox-ContentContainer'>
                </div>
                </>
            );
            break;
        }
    }, [menuState, selectedPayment])

  return (
    <div className='PaymentBox'>
        {content}
    </div>
  )
}

export default PaymentBox