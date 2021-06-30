const leagueJs = require('../config/modConfig');

const name = "mega sloppy";

const { Summoner } = require('../services/summonerService');


exports.test_function = (req, res) => {

    leagueJs.StaticData.gettingVersions()
        .then(versions => {
            res.json(versions);
        });

}