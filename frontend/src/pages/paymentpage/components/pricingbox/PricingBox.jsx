import React from 'react'
import "./PricingBox.css"
import { SubmitButton } from '../../../../shared/components'

const PricingBox = (props) => {
  return (
    <div className='PricingBox'>
      <div className='PriceContainer'>
        <h className="PriceContainer-Title">{props.title}</h>
        <h className="PriceContainer-Price">{props.price}</h>
      </div>
      <div className='PricingBox-BottomContainer'>
          <SubmitButton width="70%" onClick={props.onClick} id={props.id} text="Köp"></SubmitButton>
      </div>
    </div>
  )
}

export default PricingBox