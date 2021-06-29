import axios from 'axios';

// Endpoints for grabbing API data from backend

exports.getSummonerProfile = async (summoner_name, summoner_region) => {
    //return 'ERROR NOT DEFINED: ' + summoner_name;
    const url = `http://localhost:3001/summoner/${summoner_name}/profile`;
    
};

exports.getSummonerMastery = (summoner_name) => {
    return 'ERROR NOT DEFINED: ' + summoner_name;
};

exports.getSummonerMatchHistory = (summoner_name) => {
    return 'ERROR NOT DEFINED: ' + summoner_name;
}
