import React, { useEffect, useState } from 'react'
import ChevronDown from "./assets/chevron-down.svg";
import "./Accordion.css"
const Accordion = (props) => {
    let [state, setState] = useState(false);
    let [content, setContent] = useState();
    useEffect(() => {
        setContent(
            <>
              <button onClick={onQuestionClick} className='Accordion-Question'>
                <p className='Accordion-Question-Text'>{props.question}</p>
                <img className={state ? 'Accordion-Question-ChevronSelected' : 'Accordion-Question-Chevron'} src={ChevronDown}></img>
              </button>
              <div className={state ? "Accordion-Content" : 'Accordion-ContentHidden'}>
                <p className="Accordion-Content-Text">
                    {state ? props.answer : ""}
                </p>
              </div>
            </>
        )
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