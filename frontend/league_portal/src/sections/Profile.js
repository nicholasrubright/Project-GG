import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            {/* <div className="container">
            {props.isLoading && <div className="loader"> </div>}
            </div> */}

            {/* <div>
                <h1>Data Inforamtoin</h1>
                <p>{JSON.stringify(profileInfo)}</p>
            </div> */}

            <div className="container" id="profile-info">
                <div className="card text-center">
                    <div className="card-body">
                        <img className="profile-icon" src={iconURL} />
                        <h1>{profileInfo['profile']['summonerName']}</h1>
                        <h2>{profileInfo['profile']['summonerLevel']}</h2>
                    </div>
                </div>
            </div>

            <div className="container" id="rank-cards">
                {rankCards}
            </div>

            {/* <div className="container" id="rank-info">
                <div className="card text-center">
                    <div className="card-body">
                        <h1>{profileInformation['ranked'][0]['queueType'].includes("SOLO") ? "Solo Queue" : "Not"}</h1>
                        <p>{profileInformation['ranked'][0]['tier']}<span> {profileInformation['ranked'][0]['rank']}</span></p>
                        <h4>{profileInformation['ranked'][0]['wins']} / {profileInformation['ranked'][0]['losses']}</h4>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                        <h1>{JSON.stringify(profileInformation['ranked'])}</h1>
                        <h1>{}</h1>
                    </div>
                </div>
            </div> */}
        </div>
    );
};