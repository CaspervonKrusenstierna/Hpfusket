import React, { useState } from 'react'
import AnswerOption from './components/AnswerOption/AnswerOption'
import "./AnswerSubmission.css"

const AnswerSubmission = (props) => {
  const [SelectedOption, setSelectedOption] = useState(0);
  return (
    <div className='AnswerSubmission'>
        <p>{props.AnswerText}</p>
        <div className='OptionsContainer'>
          <AnswerOption isSelected={SelectedOption==1} Text="A" onClick={() => {props.onChange("A"); setSelectedOption(1)}}></AnswerOption>
          <AnswerOption isSelected={SelectedOption==2} Text="B" onClick={() => {props.onChange("B"); setSelectedOption(2)}}></AnswerOption>
          <AnswerOption isSelected={SelectedOption==3} Text="C" onClick={() => {props.onChange("C"); setSelectedOption(3)}}></AnswerOption>
          <AnswerOption isSelected={SelectedOption==4} Text="D" onClick={() => {props.onChange("D"); setSelectedOption(4)}}></AnswerOption>
          <AnswerOption isSelected={SelectedOption==5} Text="E" onClick={() => {props.onChange("E"); setSelectedOption(5)}}></AnswerOption>
        </div>
    </div>

  )
}

export default AnswerSubmission