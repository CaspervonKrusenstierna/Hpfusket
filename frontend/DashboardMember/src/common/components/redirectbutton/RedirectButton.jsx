import React from 'react'
import "./RedirectButton.css"
import { Link } from 'react-router-dom'

const RedirectButton = (props) => {
  return (
  <Link to={props.href} style={{textDecoration: "none"}}>
      <button className='RedirectButton'>{props.text}</button>
  </Link>
  )
}

export default RedirectButton