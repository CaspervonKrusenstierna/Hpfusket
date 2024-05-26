import React, { useEffect, useState } from 'react'
import ChevronDown from "./assets/chevron-down.svg";
import "./Accordion.css"
const Accordion = (props) => {
    let [state, setState] = useState(0);
    let [content, setContent] = useState();
    useEffect(() => {
        if(state == 0){
            setContent(
            <>
                <button onClick={onQuestionClick} className='Accordion-Question'>
                    <p className='Accordion-Question-Text'>{props.question}</p>
                    <img className='Accordion-Question-Chevron' src={ChevronDown}></img>
             </button>
             <div className='Accordion-ContentHidden'>
                    <p className="Accordion-Content-Text">
                    </p>
             </div>
            </>
            )
        }
        else{
            setContent(
                <>
                    <button onClick={onQuestionClick} className='Accordion-Question'>
                        <p className='Accordion-Question-Text'>{props.question}</p>
                        <img className='Accordion-Question-ChevronSelected' src={ChevronDown}></img>
                 </button>
                 <div className='Accordion-Content'>
                    <p className="Accordion-Content-Text">
                        {props.answer}
                    </p>
                 </div>
                </>
                )
        }
    }, [state])
    function onQuestionClick(){
        setState(!state);
    }
  return (
    <div className='Accordion'>
        {content}
    </div>
  )
}

export default Accordion