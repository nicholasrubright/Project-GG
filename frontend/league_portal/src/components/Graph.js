import React from 'react';

import { Doughnut } from 'react-chartjs-2';

export default function Graph(props) {


    const win_lose = props.win_lose

    const data = {
        labels: ['Win', 'Loss'],
        datasets: [
            {
                data: win_lose,
                backgroundColor: [
                    '#BADEFC',
                    '#e27580',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    '#EB5160',
                ],
                borderWidth: 1,
                label: 'Win/Loss Ratio',
            },
        ],
    };

    return (
        <div>
            <Doughnut data={data} width={30} height={180} options={{ maintainAspectRatio: false }} />
        </div>
    )
}