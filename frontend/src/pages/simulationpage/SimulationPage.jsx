import React, { useEffect, useState } from 'react'
import "./SimulationPage.css"
import AnswerSubmissionContainer from './components/answersubmissioncontainer/AnswerSubmissionContainer'
import ResultWindow from './components/resultwindow/ResultWindow';
import { CommunicateAnswers, GenerateRandomAnswers, ResetMemory, StartTest } from '../../shared/scripts/Cheat';

let Facit;
let HasPlayed = false;
let GetResult = (Answers) => {
  let Result = 0;
  for(let i = 0; 40 > i; i++){
    if(Answers[i] == Facit[i]){
      Result++;
    }
  }
  return Result;
}
const SimulationPage = (props) => {
  const [content, setContent] = useState(<><AnswerSubmissionContainer onAnswersSubmission={(Answers) => {setContent(<ResultWindow Result={GetResult(Answers)}></ResultWindow>)}}></AnswerSubmissionContainer></>)
  useEffect(() => {
    if(!HasPlayed){
      Facit = GenerateRandomAnswers(20);
      CommunicateAnswers(Facit);
      HasPlayed = true;
    }
  }, [])
  return (
    <div className='SimulationPage'>
      {content}
    </div>
  )
}

export default SimulationPage