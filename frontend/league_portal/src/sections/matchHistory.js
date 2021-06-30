import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Match from '../components/Match';

export default function MatchHistory(props) {

    const [matchHistory, setMatchHistory] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (summoner_name) => {
        const url = `http://localhost:3001/summoner/${summoner_name}/matchHistory`;
        setIsLoading(true);
        const results = await axios(url);
        setMatchHistory(results["data"]);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData(props.summonerName);
      }, []);

    const match_history = isLoading ? [] : <div>{matchHistory.map(x => 
        <Match 
            data={x}
        />)}
    </div>

    return (
        <div className="container">
                {isLoading && 
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="loader"></div>
                        </div>
                    </div>}
            {!isLoading && <div className="container-fluid">
                {match_history}
            </div>}
        </div>
    )

}