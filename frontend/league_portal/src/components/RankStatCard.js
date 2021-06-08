import React from 'react';

export default function RankStatCard(props) {

    const queueType = props.queueType.includes("SOLO") ? "Solo Queue" : "Flex Queue";
    const tier = props.tier;
    const rank = props.rank;
    const wins = props.wins;
    const losses = props.losses;

    return (
        <div className="card text-center">
            <div className="card-title">
                <h1>{queueType}</h1>
            </div>
            <div className="card-body">
                <h2>{tier} {rank}</h2>
                <h4>{wins} / {losses}</h4>
            </div>
        </div>
    );
};