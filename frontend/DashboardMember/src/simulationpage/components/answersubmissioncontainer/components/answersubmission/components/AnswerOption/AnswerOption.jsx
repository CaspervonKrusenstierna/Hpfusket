import React from 'react'
import "./AnswerOption.css"

const AnswerOption = (props) => {
  if(props.isSelected){
    return (
      <button className='AnswerOptionSelected' onClick={props.onClick}>
        {props.Text}
      </button>
    )
  }
  return (
    <button className='AnswerOptionUnSelected' onClick={props.onClick}>
      {props.Text}
    </button>
  )
}

export default AnswerOption