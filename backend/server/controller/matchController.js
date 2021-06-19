
exports.match_history = (req, res) => {

    // const API_KEY = process.env.API_KEY;
    // const LeagueJS = require('../node_modules/leaguejs');
    // const leagueJs = new LeagueJS(API_KEY);


    const summoner_name = req.params.summoner_name;

    var accountdata = leagueJs.Summoner.gettingByName(summoner_name);


    var data = accountdata
        .then(account_data => {
            return leagueJs.Match.gettingListByAccount(account_data['id']);
        });

    Promise.all([data, accountdata])
        .then(([data, account_data]) => {
            console.log("data: " + data);
        })
    

}