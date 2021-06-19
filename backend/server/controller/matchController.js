const leagueJs = require('../config/modConfig');

const matchHistoryService = require('../services/summoner_match_history');

exports.match_history = (req, res) => {

    const summoner_name = req.params.summoner_name;

    const accountData = leagueJs.Summoner.gettingByName(summoner_name);

    var match_list = accountData
        .then(account_data => {
            return leagueJs.Match.gettingListByAccount(account_data['accountId']);
        });

    var match_ids = match_list
        .then(match_list => {
            var matcheList = match_list.matches.filter(x => x.queue === 420);
            
            var list = [];
            matcheList.forEach(x => list.push(x.gameId));
            return list;
        });

    var match_info = match_ids
        .then(match_ids => {
            temp = [];
            match_ids.forEach(x => temp.push(leagueJs.Match.gettingById(x)));
            return temp;
        });

        accountData.then(
            account_data => {
                match_info.then(x => Promise.all(x)
                                        .then(y =>  {
                                            temp = [];
                                            y.forEach(match => temp.push(matchHistoryService.buildMatchHistory(match, account_data['accountId'])));
                                            res.json(temp);
                                        }));
            }
        );
    

}