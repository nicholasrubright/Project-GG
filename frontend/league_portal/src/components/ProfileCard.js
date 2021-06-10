import React from 'react';

export default function ProfileCard(props) {
    

    // version will need the game's version in order to keep getting updated profile icons

    const summoner_name = props.summonerName;
    const iconURL = "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/" + props.iconURL + ".png";

    const summoner_level = props.summonerLevel;

    return (
        <div id="profile-card" className="card text-center">
            <div className="card-title">
                <h1>{summoner_name}</h1>
                <img src={iconURL} />
            </div>
            <div className="card-body">
                <p>{summoner_level}</p>
            </div>
        </div>
    );
};