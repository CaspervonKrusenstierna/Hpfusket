import React, { useEffect, useState } from 'react'
import "./Question.css"
import { VectorDown, VectorUp } from '../../../../../../common/assets'

const Question = (props) => {
  const [content, setContent] = useState(<></>)
   function HideAnswer(){
    setContent(
      <button className='Question' onClick={RevealAnswer}>
        <h className="Question-Title">{props.question}</h>
        <img className="Question-Img" src={VectorDown}></img>
      </button>
    )
   }
   function RevealAnswer(){
    setContent(      
    <div className='Question-Container'>
      <button className='Question' onClick={HideAnswer}>
        <h className="Question-Title">{props.question}</h>
        <img className="Question-Img" src={VectorUp}></img>
      </button>
      <div className='Question-Answer'>
        {props.answer}
      </div>
    </div>)
    }
    useEffect(() => {HideAnswer();}, [])
  return content;
}

export default Question