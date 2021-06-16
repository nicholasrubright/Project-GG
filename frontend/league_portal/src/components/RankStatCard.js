import React from 'react';

export default function RankStatCard(props) {

    const queueType = props.queueType.includes("SOLO") ? "Solo Queue" : "Flex Queue";
    const tier = props.tier;
    const rank = props.rank;
    const wins = props.wins;
    const losses = props.losses;

    return (
        <div id="rank-stat-card" className="card text-center" style={{width: "18rem"}}>
            <div className="card-title">
                <h5>{queueType}</h5>
            </div>
            <div className="card-body">
                <p>{tier} {rank}</p>
                <p>{wins} / {losses}</p>
            </div>
        </div>
    );
};