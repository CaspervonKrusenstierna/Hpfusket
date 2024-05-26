import React, { useEffect, useRef, useState } from 'react'
import AnswerSubmission from './components/answersubmission/AnswerSubmission'
import "./AnswerSubmissionContainer.css"
import AnswerSubmissionButton from './components/answersubmissionbutton/AnswerSubmissionButton';

const AnswerSubmissionContainer = (props) => {
  const Answers = useRef(new Array(40));
  const [answerSubmissions, setAnswersSubmissions] = useState([]);
  useEffect(() => {
    let temp = [];
    for(let i = 0; 40 > i; i++){
      let currQuestionIndex = i+1;
      temp.push(<AnswerSubmission AnswerText={"Fråga " + currQuestionIndex} onChange={(value) => {Answers[i] = value}}></AnswerSubmission>)
    }
    setAnswersSubmissions(temp);
  }, [])
  return (
    <div className='AnswerSubmissionContainer'> 
        {answerSubmissions.map(s => {return s})}
        <AnswerSubmissionButton onClick={() => {props.onAnswersSubmission(Answers)}}></AnswerSubmissionButton>
    </div>
  )
}

export default AnswerSubmissionContainer