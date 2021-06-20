const leagueJs = require('../config/modConfig');

const name = "mega sloppy";

// const champList = require('../config/staticFiles/11.12.1/en_US/championFull.json');

// const champKeys = champList.keys;

const matchHistoryService = require('../services/summoner_match_history');

exports.test_function = (req, res) => {

    

    //match_info.then(x => Promise.all(x, accountData).then(y => res.json(y)));  // prints many games
    //match_info.then(([x]) => Promise.all([x, accountData]).then(y => res.json(matchHistoryService.buildMatchHistory(y[0], y[1].accountId))));  // prints 1 game
    

    // Special Game mode is queue: 1300
    // Flex 5v5 is queue: 440
    // Normal is queue: 400
    // Ranked Solo is queue: 420
}