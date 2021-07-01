import React, { useEffect, useState } from 'react';
import axios from 'axios';


import SearchBar from '../components/SearchBar';

import Profile from './Profile';
import MatchHistory from './MatchHistory';
import Rank from './Rank';
import Error from '../components/Error';

export default function Main(props) {
    
    const [localInfo, setLocalInfo] = useState({
            summonerName: "",
            summonerRegion: "",
            gameVersion: "",
            searchSummoner: false,
    });

    const [profileInfo, setProfileInfo] = useState({});

    const [rankInfo, setRankInfo] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState({
        error: false,
        message: "No summoner found"
    });

    function searchSummoner(summoner_name, region) {

        setLocalInfo({
            ...localInfo,
            summonerName: summoner_name,
            summonerRegion: region,
            searchSummoner: true
        });

        console.log("summoner: " + summoner_name + "\nregion: " + region);
    }

    function setSummonerInfo(profile, rank) {
        setProfileInfo(profile);
        setRankInfo(rank);
    }

    const fetchData = async (summoner_name) => {
        const profile_url = `http://localhost:3001/summoner/${summoner_name}/profile`;
        const rank_url = `http://localhost:3001/summoner/${summoner_name}/rankStats`;
        setIsLoading(true);
        const profile_results = await axios(profile_url);
        const rank_results = await axios(rank_url);

        setSummonerInfo(profile_results.data, rank_results.data);
        setIsLoading(false);
    };



    return (
        <div className="container">
            <h1>Hello World!</h1>

            <div className="container-fluid">
                <SearchBar 
                    searchSummoner={searchSummoner}
                    fetchData={fetchData}
                />
            </div>

            {isError.error && <Error message={isError.message}/>}

            
            <div className="container">
                {isLoading && 
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="loader"></div>
                        </div>
                    </div>
                }
                {localInfo.searchSummoner && !isLoading &&
                <div className="row">
                    <div className="col-3">
                        <Profile 
                            profileInfo={profileInfo}
                        />
                        <Rank 
                            rankInfo={rankInfo}
                        />
                    </div>
                    <div className="col-9">
                        <MatchHistory 
                            summonerName={localInfo.summonerName}
                        />
                    </div>
                </div>}
            </div>
            
            {/* <div className="container">
                <div className="d-flex justify-content-center">
                {isLoading && <div className="loader"></div>}
                </div>
            </div> */}

            {/* <div>
            {localInfo.searchSummoner && !isLoading && 
                <Profile 
                    profileInfo={profileInfo}
                />
            }
            </div> */}

        </div>
    );
}