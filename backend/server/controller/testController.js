const leagueJs = require('../config/modConfig');

const name = "mega sloppy";

// const champList = require('../config/staticFiles/11.12.1/en_US/championFull.json');

// const champKeys = champList.keys;

const matchHistoryService = require('../services/summoner_match_history');




exports.test_function = (req, res) => {

    const RANK_SOLO_QUEUE = 440;
    const RANK_FLEX = 420;

    //const summoner_name = req.params.summoner_name;

    leagueJs.Summoner.gettingByName(name)
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
        })




    // const accountData = leagueJs.Summoner.gettingByName(name);

    // var match_list = accountData
    //     .then(account_data => {
    //         return leagueJs.Match.gettingListByAccount(account_data['accountId']);
    //     });

    // var match_ids = match_list
    //     .then(match_list => {
    //         var matcheList = match_list.matches.filter(x => x.queue === 420 || x.queue === 440);
            
    //         var list = [];
    //         (matcheList).splice(0,3).forEach(x => list.push(x.gameId));
    //         return list;
    //     });

    // var match_info = match_ids
    //     .then(match_ids => {
    //         temp = [];
    //         match_ids.forEach(x => temp.push(leagueJs.Match.gettingById(x)));
    //         return temp;
    //     });

    //     // accountData.then(
    //     //     account_data => {
    //     //         match_info.then(x => Promise.all(x)
    //     //                                 .then(y =>  {
    //     //                                     temp = [];
    //     //                                     y.forEach(match => temp.push(matchHistoryService.buildMatchHistory(match, account_data['accountId'])));
    //     //                                     res.json(temp);
    //     //                                 }));
    //     //     }
    //     // );

    //     accountData.then(
    //         account_data => {
    //             match_info.then(x => Promise.all(x)
    //                                     .then(y =>  {
    //                                         temp = [];
    //                                         y.forEach(match => temp.push(match));
    //                                         res.json(temp);
    //                                     }));
    //         }
    //     );
}