import React, { useEffect, useState } from 'react'
import { GlobalDelimiter } from '../url/urlTest';

export default function DetailsQuestion(props) {
    const [answers, setAnswer] = useState([]);
    const delimiter = GlobalDelimiter;
    useEffect(() => {
        setAnswer(props.question.trueAnswer.split(delimiter)
            .concat(props.question.falseAnswer.split(delimiter))
            .sort(() => Math.random() - 0.5));
    }, []);

    function checkWrongSelectAnswer(answer, itemCheck) {
        return answer.split(",").some(x => x.substring(0, 1).toUpperCase() == "F" && x == itemCheck);
    }

    function checkTrueSelectAnswer(answer, itemCheck) {
        return answer.split(",").some(x => x.substring(0, 1).toUpperCase() == "T" && x == itemCheck);
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.id}`}>
                Chi tiết câu trả lời
            </button>
            <div className="modal fade" id={`exampleModal${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Question {props.question.id} information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-header">
                                    {props.question.title}
                                </div>
                                <ul className="list-group list-group-flush">
                                    {answers.map(item =>
                                        <li className="list-group-item" key={item}
                                            style={checkWrongSelectAnswer(props.answer, item)
                                                && props.answer.includes(item.substring(0, 1))
                                                ? { background: "red" }
                                                : checkTrueSelectAnswer(props.answer, item)
                                                    && props.answer.includes(item.substring(0, 1))
                                                    ?
                                                    { background: "green" }
                                                    : { background: "white" }}>
                                            {item.substring(1)}
                                        </li>)}

                                </ul>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
