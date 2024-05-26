import React from 'react'
import "./PaymentPage.css"
import PricingBox from './components/pricingbox/PricingBox'
import PaymentBox from './components/paymentbox/PaymentBox'
import { useEffect } from 'react'

import { useState } from 'react'

const PaymentPage = (props) => {
  const [renderPaymentBox, setRenderPaymentBox] = useState(false);

  function onBuyClick(){
    setRenderPaymentBox(true);
  }
  function onPaymentBoxExit(){
    setRenderPaymentBox(false);
  }
  let content = (
    <>
      <div className='DarknessEffect'></div>
      <div className='PaymentPage'>
        <div className='Title'>Priser</div>
        <div className='PricingBoxContainer'>
          <PricingBox onClick={onBuyClick} title="1.35+" price="25000kr" id={1}></PricingBox>
          <PricingBox onClick={onBuyClick} title="1.5+" price="45000kr" id={2}></PricingBox>
          <PricingBox onClick={onBuyClick} title="1.75+" price="70000kr" id={3}></PricingBox>
          <PricingBox onClick={onBuyClick} title="1.95+" price="95000kr" id={4}></PricingBox>
        </div>
        {renderPaymentBox ? <PaymentBox id={id} onExit={onPaymentBoxExit}></PaymentBox> : <></>}
    </div>
   </>
  )
  
  return renderPaymentBox ? <div className='unfocus'>{content}</div> : <>{content}</>
  
}

export default PaymentPage