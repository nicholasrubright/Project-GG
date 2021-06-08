var express = require('express');
var router = express.Router();

// Controller
var summoner_controller = require('../controller/summonerController');

// Router to index
router.get('/', (req, res) => {
    res.redirect('/');
});

// Router to Summoner
router.get('/:summoner_name/profile', summoner_controller.summoner_profile);

router.get('/:summoner_name/match_history', summoner_controller.summoner_match_history);

router.get('/:summoner_name/mastery', summoner_controller.summoner_champion_mastery);


module.exports = router;