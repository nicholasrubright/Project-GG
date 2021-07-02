const leagueJs = require('../config/modConfig');

const name = "mega sloppy";

const { Summoner } = require('../services/summonerService');


exports.test_function = (req, res) => {

    leagueJs.Summoner.gettingByName(name)
        .then(account => {
            leagueJs.ChampionMastery.gettingBySummoner(account.id)
                .then(mastery_entries => {

                    if(mastery_entries.length > 3) {
                        mastery_entries = mastery_entries.splice(0, 3);
                    }

                    var response = Summoner.buildChampionMastery(mastery_entries);

                    res.json(response);
                })
        })

}