const leagueJs = require('../config/modConfig');

const { Summoner } = require('../services/summonerService');


exports.profile = (req, res) => {
    const summoner_name = req.params.summoner_name;

    leagueJs.Summoner.gettingByName(summoner_name)
        .then(account_data => {
            var response = Summoner.buildProfile(account_data);
            res.json(response);
        });
}

exports.rankStats = (req, res) => {

    const summoner_name = req.params.summoner_name;

    leagueJs.Summoner.gettingByName(summoner_name)
        .then(account_data => {

            leagueJs.League.gettingLeagueEntriesForSummonerId(account_data.id)
                .then(rank_entries => {
                    var response = Summoner.buildRankEntries(rank_entries);
                    res.json(response);
                })

        })
}

exports.matchHistory = (req, res) => {
    // Rank constants
    const RANK_SOLO_QUEUE = 440;
    const RANK_FLEX = 420;

    const summoner_name = req.params.summoner_name;

    leagueJs.Summoner.gettingByName(summoner_name)
        .then(account => {
            
            leagueJs.Match.gettingListByAccount(account.accountId)
                .then(match_list => {
                    var match_list = match_list.matches.filter(match => match.queue === RANK_FLEX || match.queue === RANK_SOLO_QUEUE);
                    return match_list.splice(0,5).map(match => match.gameId);
                })
                .then(match_ids => {
                    return match_ids.map(match_id => leagueJs.Match.gettingById(match_id));
                })
                .then(matches => {
                    Promise.all(matches)
                    .then(match_data => {
                        var response = match_data.map(match => Summoner.buildMatchHistory(match, account.accountId));
                        res.json(response);
                    })
                })
        })
}