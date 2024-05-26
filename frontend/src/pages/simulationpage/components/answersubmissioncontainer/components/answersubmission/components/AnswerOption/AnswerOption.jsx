import React from 'react'
import "./AnswerOption.css"

const AnswerOption = (props) => {

  return (
    <button className={props.isSelected ? 'AnswerOptionSelected' : 'AnswerOptionUnSelected'} onClick={props.onClick}>
      {props.Text}
    </button>
  )
}

export default AnswerOption