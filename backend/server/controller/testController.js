const leagueJs = require('../config/modConfig');

const name = "mega sloppy";

// const champList = require('../config/staticFiles/11.12.1/en_US/championFull.json');

// const champKeys = champList.keys;

const matchHistoryService = require('../services/summoner_match_history');

exports.test_function = (req, res) => {

    const accountData = leagueJs.Summoner.gettingByName(name);


    var match_list = accountData
        .then(account_data => {
            return leagueJs.Match.gettingListByAccount(account_data['accountId']);
        });


    //var match_list_full = []
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
                                        //res.json([y, account_data]) 
                                    }));
        }
    )

    //match_info.then(x => Promise.all(x, accountData).then(y => res.json(y)));  // prints many games
    //match_info.then(([x]) => Promise.all([x, accountData]).then(y => res.json(matchHistoryService.buildMatchHistory(y[0], y[1].accountId))));  // prints 1 game
    

    // Special Game mode is queue: 1300
    // Flex 5v5 is queue: 440
    // Normal is queue: 400
    // Ranked Solo is queue: 420
}