const leagueJs = require('../config/modConfig');



exports.summoner_profile = (req, res) => {
    // res.send('NOT IMPLEMENTED: Summoner Profile: ' + req.params.summoner_name);

    const summoner_name = req.params.summoner_name;

    var accountData = leagueJs.Summoner.gettingByName(summoner_name);

    var leagueData = accountData
        .then(account_data => {
            return leagueJs.League.gettingLeagueEntriesForSummonerId(account_data['id']);
        });
    
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
    const summoner_name = req.params.summoner_name;

    var accountdata = leagueJs.Summoner.gettingByName(summoner_name);


    var data = accountdata
        .then(account_data => {
            return leagueJs.Match.gettingListByAccount(account_data['accountId']);
        });

    // Promise.all([data, accountdata])
    //     .then(([data, account_data]) => {
    //         console.log("data: " + JSON.stringify(data.matches[0]));
    //     })

    var match_data = data
        .then(data => {
            return leagueJs.Match.gettingById(data.matches[0].gameId);
        });


    Promise.all([match_data])
        .then(([match_data]) => {
            //console.log(JSON.stringify(match_data));
            res.json(match_data);
        });
};

exports.summoner_champion_mastery = (req, res) => {
    res.send('NOT IMPLEMENTED: Summoner Champion Mastery: ' + req.params.summoner_name);
}
