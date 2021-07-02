import React, { useState } from 'react';


import Graph from '../components/Graph';

export default function Rank (props) {
    const [rankInfo, setRankInfo] = useState(props.rankInfo);

    var rankEntries = rankInfo.map(entry => {
        return (
            <div>
                <h3>{entry.queueType.includes("SOLO") ? "Solo Queue" : "Flex Queue"}</h3>
                <h5>{entry.tier} {entry.rank}</h5>
                <Graph win_lose={[entry.wins, entry.losses]} />
            </div>
        )
    });

    if(rankEntries.length > 1) {
        rankEntries.splice(1, 0,<hr />)
    }



    return (
        <div className="container g-0" id="rank-card" style={{paddingTop: "1rem"}}>
             <div className="card text-center rank-card" style={{width: "18rem"}}>
                    <div className="card-body">
                        {rankEntries}
                    </div>
                </div>
        </div>
    )
}