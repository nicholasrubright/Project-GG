import React, { useState, useEffect } from 'react';

import RankStatCard from '../components/RankStatCard';

export default function Profile (props) {

    const [profileInfo, setProfileInfo] = useState(props.profileInfo);
    
    const iconURL =  props.isLoading ?  "#" : "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" + profileInfo.profileIconId + ".png";
    

    // Think about implementing a skeleton screen at some point

    return (
        <div>
            <div className="container g-0" id="profile-info">
                <div className="card text-center profile-info" style={{width: "18rem"}}>
                    <div className="card-body">
                        <img alt="profileIcon" className="profile-icon" src={iconURL} />
                        <h3>{profileInfo['summonerName']}</h3>
                        <h4>Lvl: {profileInfo['summonerLevel']}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};