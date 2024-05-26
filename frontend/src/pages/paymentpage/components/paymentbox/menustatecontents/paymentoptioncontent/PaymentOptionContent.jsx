import React, { useRef, useState } from 'react'
import { ExitButton, ContinueButton } from '../../../../../../shared/components';
import PaymentOption from "../../components/paymentoption/PaymentOption"
import { MoneroImg, BitcoinImg } from '../../../../../../shared/assets';
const PaymentOptionContent = (props) => {
const [selectedPayment, setSelectedPayment] = useState(-1)
  return (
    <>
        <div className='ExitButtonContainer'><ExitButton onClick={props.onExit}></ExitButton></div>
        <h className="PaymentBox-Title">Betalningsmetod</h>
            <div className='PaymentBox-PaymentOptionContainer'>
                <PaymentOption img={BitcoinImg} value={selectedPayment == 0} onClick={() => {setSelectedPayment(0)}}></PaymentOption>
                <PaymentOption img={MoneroImg} value={selectedPayment == 1} onClick={() => {setSelectedPayment(1)}}></PaymentOption>
            </div>
        <ContinueButton onClick={() => {props.onContinue(selectedPayment)}}/>
    </>
  )
}

export default PaymentOptionContent