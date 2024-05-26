import React from 'react'
import "./ViewButtonLink.css"
import { ArrowRightSolid } from '../../assets'
import { Link } from 'react-router-dom'

const ViewButtonLink = () => {
  return (
    <button className='ViewButtonLink'>
    <Link to="/activetest" style={{textDecoration: "none", height: "50px", width: "100%"}}>
          <img className='ViewButtonLink-img' src={ArrowRightSolid}></img>
    </Link>
  </button>
  )
}

export default ViewButtonLink