import React from 'react'
import "./ViewButton.css"
import { ArrowRightSolid } from '../../../../../../../../shared/assets'

const ViewButton = (props) => {
  return (
    <button className='ViewButton' onClick={props.onClick}>
        <img className="ViewButton-img" src={ArrowRightSolid}/>
    </button>
  )
}

export default ViewButton