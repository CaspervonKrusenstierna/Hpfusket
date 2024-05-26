import React from 'react'
import "./PaymentPage.css"
import PricingBox from './components/pricingbox/PricingBox'
import PaymentBox from './components/paymentbox/PaymentBox'
import { useEffect } from 'react'

import { useState } from 'react'

const PaymentPage = (props) => {
  const [content, setContent] = useState(<></>);
  useEffect(() => {
    function onBuyClick(id){
      setContent(
        <div className='unfocus'>
          <div className='DarknessEffect'></div>
            <div className='PaymentPage'>
              <div className='Title'>Priser</div>
              <div className='PricingBoxContainer'>
                <PricingBox onClick={onBuyClick} title="1.35+" price="25000kr" id={1}></PricingBox>
                <PricingBox onClick={onBuyClick} title="1.5+" price="45000kr" id={2}></PricingBox>
                <PricingBox onClick={onBuyClick} title="1.75+" price="70000kr" id={3}></PricingBox>
                <PricingBox onClick={onBuyClick} title="1.95+" price="95000kr" id={4}></PricingBox>
              </div>
            <PaymentBox id={id} onExit={RenderStandardPage}></PaymentBox>
        </div>
      </div>
      )
    }
    function RenderStandardPage(){
      setContent(
        <>
          <div className='PaymentPage'>
              <div className='Title'>Priser</div>
              <div className='PricingBoxContainer'>
                <div className='PricingBoxSubContainer'>
                <PricingBox onClick={onBuyClick} title="1.35+" price="25000kr" id={1}></PricingBox>
                <PricingBox onClick={onBuyClick} title="1.5+" price="45000kr" id={2}></PricingBox>
                </div>
                <div className='PricingBoxSubContainer'>
                  <PricingBox onClick={onBuyClick} title="1.75+" price="70000kr" id={3}></PricingBox>
                  <PricingBox onClick={onBuyClick} title="1.95+" price="95000kr" id={4}></PricingBox>
                </div>
              </div>
        </div>
      </>
      )
    }
    RenderStandardPage();
  }, [])
  return (<>{content}</>)
}

export default PaymentPage