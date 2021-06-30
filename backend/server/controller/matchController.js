const leagueJs = require('../config/modConfig');

const matchHistoryService = require('../services/summoner_match_history');
const errorService = require('../services/summoner_error');

exports.match_history = (req, res) => {

    const RANK_SOLO_QUEUE = 440;
    const RANK_FLEX = 420;

    const summoner_name = req.params.summoner_name;

    leagueJs.Summoner.gettingByName(summoner_name)
        .then(account => {
            
            leagueJs.Match.gettingListByAccount(account.accountId)
                .then(match_list => {
                    var match_list = match_list.matches.filter(match => match.queue === RANK_FLEX || match.queue === RANK_SOLO_QUEUE);
                    var match_ids = [];
                    match_list.splice(0, 5).forEach(match => match_ids.push(match.gameId));
                    return match_ids;
                })
                .then(match_ids => {
                    matches = [];
                    match_ids.forEach(match_id => matches.push(leagueJs.Match.gettingById(match_id)));
                    return matches;
                })
                .then(matches => {
                    Promise.all(matches)
                        .then(match_data => {
                            response = [];
                            match_data.forEach(match => response.push(matchHistoryService.buildMatchHistory(match, account.accountId)));
                            res.json(response);
                        })
                })
        }).catch(err => {
            errorService.sendError(res, err);
        });


}