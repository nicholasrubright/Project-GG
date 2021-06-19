const API_KEY = process.env.RIOT_API_KEY;

const LeagueJS = require('../node_modules/leaguejs');
const leagueJs = new LeagueJS(API_KEY);

const DataDragonHelper = require('leaguejs/lib/DataDragon/DataDragonHelper');

DataDragonHelper.storageRoot = [__dirname, './', './staticFiles'];


// exports.championList = () => {
//     return DataDragonHelper.gettingChampionsList();
// }


module.exports = leagueJs;