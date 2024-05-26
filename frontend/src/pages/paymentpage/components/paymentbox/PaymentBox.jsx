import React, { useRef } from 'react'
import "./PaymentBox.css"
import { useState, useEffect} from 'react'
import {PaymentOptionContent, PaymentContent, CouponCodeContent} from './menustatecontents'

let ReferralCode;

const PaymentBox = (props) => {
    const [menuState, setMenuState] = useState(0);
    const [content, setContent] = useState(<></>);
    const paymentMethod = useRef();
    const referallCode = useRef();

    function incMenuState(){
        setMenuState(menuState + 1);
    }
    function decMenuState(){
        setMenuState(menuState - 1)
    }

    function onSubmitPaymentOption(paymentOption){
        if(paymentOption != -1){
            paymentMethod.current = paymentOption;
            incMenuState();
        }
    }
    function onSubmitReferralCode(){
        setMenuState(2);
        console.log(ReferralCode);
    }
    useEffect(() => {
        switch(menuState){
            case 0: setContent(<PaymentOptionContent onContinue={onSubmitPaymentOption} onExit={props.onExit}/>); break;
            case 1: setContent(<CouponCodeContent onContinue={incMenuState} onBack={decMenuState} referallCode={referallCode} onExit={props.onExit}/>); break;
            case 2: setContent(<PaymentContent onContinue={incMenuState} onBack={decMenuState} onExit={props.onExit}/>); break;
        }
    }, [menuState])

  return (
    <div className='PaymentBox'>
        {content}
    </div>
  )
}

export default PaymentBox