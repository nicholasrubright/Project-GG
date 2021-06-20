import React, {useState } from 'react';
import Doughnut from 'react-chartjs-2';


export default function GraphCard () {
    

    const [graphData, setGraphData] = useState({
        labels: ['Win', 'Loss'],
        datasets: [
            {
                label: 'Win/Loss',
                backgroundColor: [
                    '#9EE493',
                    '#FF595E',
                ],
                data: [21, 10]
            }
        ]
    });

    return (
        <div className="card">
            <div className="card-title">
                <h5>Win Ratio</h5>
            </div>
            <div className="card-body">
                {/* <Doughnut /> */}
            </div>
        </div>
    )
}