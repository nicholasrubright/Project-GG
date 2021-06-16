import React, { useState, useEffect } from 'react';

import RankStatCard from '../components/RankStatCard';

export default function Profile (props) {

    const [profileInfo, setProfileInfo] = useState(props.profileInfo);
    
    const iconURL =  props.isLoading ?  "#" : "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" + profileInfo['profile']['profileIcon'] + ".png";
    
    const rankCards = profileInfo['ranked'].map((stats) => {
         return ( 
            <RankStatCard 
                queueType={stats['queueType']}
                tier = {stats['tier']}
                rank = {stats['rank']}
                wins={stats['wins']}
                losses={stats['losses']}
            />
         );
    });


    // Think about implementing a skeleton screen at some point

    return (
        <div>
            <h1>Profile Information</h1>

            <div className="container" id="profile-info">
                <div className="card text-center" style={{width: "18rem"}}>
                    <div className="card-body">
                        <img className="profile-icon" src={iconURL} />
                        <h3>{profileInfo['profile']['summonerName']}</h3>
                        <h4>Lvl: {profileInfo['profile']['summonerLevel']}</h4>
                    </div>
                </div>
            </div>

            <div className="container" id="rank-cards">
                {rankCards}
            </div>

        </div>
    );
};