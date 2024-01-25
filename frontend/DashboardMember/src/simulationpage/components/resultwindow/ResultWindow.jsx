import React from 'react'
import "./ResultWindow.css"
import TryAgainButton from './components/tryagainbutton/TryAgainButton'

const ResultWindow = (props) => {
  return (
    <div className='ResultWindow'>
        <p className='ResultWindow-Text'>Du fick {props.Result} / 40</p>
        <TryAgainButton></TryAgainButton>
    </div>
  )
}

export default ResultWindow