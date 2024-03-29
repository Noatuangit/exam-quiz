import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './ExamTest.css';
import DetailsQuestion from './DetailsQuestion';
export default function Result() {
    const location = useLocation();

    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend
    )

    const data = {
        labels: ['Đúng', 'Sai'],
        datasets: [
            {
                label: 'Result',
                data:
                    [location.state[0].point,
                    location.state[1].length - location.state[0].point],
                backgroundColor: [
                    'green',
                    'red',
                ],
                borderWidth: 1,
            }
        ]
    }

    function getAnswerByQuestion(number) {
        let arrays = Object.entries(location.state[0]);
        for (let i = 0; i < arrays.length; i++) {
            if (arrays[i][1] == number && arrays[i][0].includes("question")) {
                return (arrays[i + 1][1]);
            }
        }
    }

    return (
        <div className="container">
            <div style={{
                textAlign: "center", justifyContent: "center",
                display: "flex"
            }}>
                <h1>Kết quả</h1>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ padding: '20px', width: '30%' }}>
                    <Pie
                        data={data}
                    />
                    <div className="class-result">
                        <p>Đúng: {location.state[0].point}/{location.state[1].length}</p>
                        <p>Sai: {location.state[1].length - location.state[0].point}/{location.state[1].length}</p>
                    </div>
                </div>
                <div>
                    <fieldset className="border p-2">
                        <legend className="float-none w-auto p-2">Danh sách đáp án</legend>

                        {location.state[1].map((item, index) =>
                            <div className="container-question" key={new Date}>
                                <div className="wrap-item-left hidden-div">
                                    Câu hỏi {index + 1}
                                </div>
                                <div className="war-item-right hidden-div" style={{ display: "flex" }}>
                                    <DetailsQuestion
                                        id={index}
                                        answer={getAnswerByQuestion(item.id)}
                                        question={item}
                                    />
                                    <button className='btn btn-outline-danger showButton'><i class="fa-solid fa-exclamation"></i></button>
                                </div>
                            </div>
                        )}
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
