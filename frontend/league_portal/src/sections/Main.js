import React, { useState } from 'react';


import SearchBar from '../components/SearchBar';

import Profile from './Profile';


export default function Main(props) {
    
    const [localInfo, setLocalInfo] = useState({
            summonerName: "",
            gameVersion: "",
            searchSummoner: false
    });

    function searchSummoner(summoner_name, region) {

        setLocalInfo({
            ...localInfo,
            summonerName: summoner_name,
            searchSummoner: true
        });


        //startSearch();
        console.log("summoner: " + summoner_name + "\nregion: " + region);
    }

    return (
        <div>
            <h1>Hello World!</h1>

            <div className="container">
                <SearchBar 
                    searchSummoner={searchSummoner}
                />
            </div>
            {/* <Profile /> */}
        </div>
    );
}