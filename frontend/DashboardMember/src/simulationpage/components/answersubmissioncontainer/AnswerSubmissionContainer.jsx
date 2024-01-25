import React, { useEffect } from 'react'
import AnswerSubmission from './components/answersubmission/AnswerSubmission'
import "./AnswerSubmissionContainer.css"
import AnswerSubmissionButton from './components/answersubmissionbutton/AnswerSubmissionButton';

let Answers = new Array(40);
const AnswerSubmissionContainer = (props) => {
  Answers = new Array(40);
  return (
    <div className='AnswerSubmissionContainer'> 
        <AnswerSubmission AnswerText="Fråga 1" onChange={(value) => {Answers[0] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 2" onChange={(value) => {Answers[1] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 3" onChange={(value) => {Answers[2] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 4" onChange={(value) => {Answers[3] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 5" onChange={(value) => {Answers[4] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 6" onChange={(value) => {Answers[5] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 7" onChange={(value) => {Answers[6] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 8" onChange={(value) => {Answers[7] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 9" onChange={(value) => {Answers[8] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 10" onChange={(value) => {Answers[9] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 11" onChange={(value) => {Answers[10] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 12" onChange={(value) => {Answers[11] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 13" onChange={(value) => {Answers[12] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 14" onChange={(value) => {Answers[13] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 15" onChange={(value) => {Answers[14] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 16" onChange={(value) => {Answers[15] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 17" onChange={(value) => {Answers[16] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 18" onChange={(value) => {Answers[17] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 19" onChange={(value) => {Answers[18] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 20" onChange={(value) => {Answers[19] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 21" onChange={(value) => {Answers[20] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 22" onChange={(value) => {Answers[21] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 23" onChange={(value) => {Answers[22] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 24" onChange={(value) => {Answers[23] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 25" onChange={(value) => {Answers[24] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 26" onChange={(value) => {Answers[25] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 27" onChange={(value) => {Answers[26] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 28" onChange={(value) => {Answers[27] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 29" onChange={(value) => {Answers[28] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 30" onChange={(value) => {Answers[29] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 31" onChange={(value) => {Answers[30] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 32" onChange={(value) => {Answers[31] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 33" onChange={(value) => {Answers[32] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 34" onChange={(value) => {Answers[33] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 35" onChange={(value) => {Answers[34] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 36" onChange={(value) => {Answers[35] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 37" onChange={(value) => {Answers[36] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 38" onChange={(value) => {Answers[37] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 39" onChange={(value) => {Answers[38] = value}}></AnswerSubmission>
        <AnswerSubmission AnswerText="Fråga 40" onChange={(value) => {Answers[39] = value}}></AnswerSubmission>
        <AnswerSubmissionButton onClick={() => {props.onAnswersSubmission(Answers)}}></AnswerSubmissionButton>
    </div>
  )
}

export default AnswerSubmissionContainer