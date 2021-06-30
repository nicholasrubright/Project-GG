import React, { useState } from 'react';

import RankStatCard from '../components/RankStatCard';

export default function Rank (props) {
    const [rankInfo, setRankInfo] = useState(props.rankInfo);

    const rankCards = rankInfo.map((entry) => {
        return (
            <RankStatCard
                queueType={entry.queueType}
                tier={entry.tier}
                rank={entry.rank}
                wins={entry.wins}
                losses={entry.losses}
            />
        )
    });

    return (
        <div className="container" id="rank-cards">
            {rankCards}
        </div>
    )
}