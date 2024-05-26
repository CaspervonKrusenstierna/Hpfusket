import React from 'react'
import "./AnswerSubmissionButton.css"

const AnswerSubmissionButton = (props) => {
  return (
    <button className="AnswerSubmissionButton" onClick={props.onClick}>Rätta</button>
  )
}

export default AnswerSubmissionButton