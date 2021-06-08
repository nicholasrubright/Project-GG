
const API_KEY = 'RGAPI-a154ddb9-28b7-4ff9-af0a-6ada7f99d3c6';

const LeagueJS = require('../node_modules/leaguejs');
const leagueJs = new LeagueJS(API_KEY);


exports.summoner_profile = (req, res) => {
    // res.send('NOT IMPLEMENTED: Summoner Profile: ' + req.params.summoner_name);

    const summoner_name = req.params.summoner_name;

    var accountData = leagueJs.Summoner.gettingByName(summoner_name);

    var leagueData = accountData
        .then(account_data => {
            return leagueJs.League.gettingLeagueEntriesForSummonerId(account_data['id']);
        });

    // leagueData
    //     .then(league_data => {
    //         console.log(league_data);
    //     })
    //     .catch(err => {
    //         console.log("Error: " + err);
    //     })
    
    Promise.all([leagueData, accountData])
        .then(([league_data, account_data]) => {

            var data = {
                "profile": {
                    "summonerName": account_data['name'],
                    "summonerLevel": account_data['summonerLevel'],
                    "profileIcon": account_data['profileIconId']
                },
                "ranked": [
                    {
                        "queueType": league_data[0]['queueType'],
                        "tier": league_data[0]['tier'],
                        "rank": league_data[0]['rank'],
                        "wins": league_data[0]['wins'],
                        "losses": league_data[0]['losses']
                    }, 
                    {
                        "queueType": league_data[1]['queueType'],
                        "tier": league_data[1]['tier'],
                        "rank": league_data[1]['rank'],
                        "wins": league_data[1]['wins'],
                        "losses": league_data[1]['losses']
                    }
                ]
            }

            res.json(data);

        })
        .catch(err => {
            console.log("Error: " + err);
        });

};

exports.summoner_match_history = (req, res) => {
    res.send('NOT IMPLEMENETED: Summoner Match History: ' + req.params.summoner_name);
};

exports.summoner_champion_mastery = (req, res) => {
    res.send('NOT IMPLEMENTED: Summoner Champion Mastery: ' + req.params.summoner_name);
}