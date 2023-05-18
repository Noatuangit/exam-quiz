import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
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
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '20px', width: '30%' }}>
                <Pie
                    data={data}
                />

                <p>true: {location.state[0].point}</p>
                <p>false: {location.state[1].length - location.state[0].point}</p>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        {location.state[1].map((item, index) =>
                            <tr key={item.id}>
                                <td>Question {index + 1}</td>
                                <td><DetailsQuestion
                                    id={index}
                                    answer={getAnswerByQuestion(item.id)}
                                    question={item}
                                /></td>
                                <td><button>Report</button></td>
                            </tr>
                        )}
                    </thead>
                </table>
            </div>
        </div>
    )
}
