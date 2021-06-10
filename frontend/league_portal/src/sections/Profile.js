import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RankStatCard from '../components/RankStatCard';

export default function Profile (props) {
    
    // Information about summoner_name, summoner region, game version, etc.
    const [localInfo, setLocalInfo] = useState(props.localInfo);


    const [profileInformation, setProfileInformation] = useState({
        "profile": {},
        "ranked": []
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);
            const results = await axios(
                'http://localhost:3001/summoner/mega%20sloppy/profile',
                );
            setProfileInformation(results['data']);
            setIsLoading(false);
            };
        fetchData();
    }, []);
    
    const iconURL =  isLoading ?  "#" : "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" + profileInformation['profile']['profileIcon'] + ".png";
    
    const rankCards = profileInformation['ranked'].map((stats) => {
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
            <div className="container">
            {isLoading && <div className="loader"> </div>}
            </div>

            <div className="container" id="profile-info">
                <div className="card text-center">
                    <div className="card-body">
                        <img className="profile-icon" src={iconURL} />
                        <h1>{profileInformation['profile']['summonerName']}</h1>
                        <h2>{profileInformation['profile']['summonerLevel']}</h2>
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