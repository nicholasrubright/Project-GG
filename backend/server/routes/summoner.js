var express = require('express');
var router = express.Router();

// Controller
var summoner_controller = require('../controller/summonerController');
var gameController = require('../controller/gameController');
var test_controller = require('../controller/testController');

// Router to index
router.get('/', (req, res) => {
    res.redirect('/');
});

// Router to Summoner
router.get('/:summoner_name/profile', summoner_controller.summoner_profile);

router.get('/:summoner_name/match_history', summoner_controller.summoner_match_history);

router.get('/:summoner_name/mastery', summoner_controller.summoner_champion_mastery);

//router.get('/gameData', gameController.gameData);

router.get('/test', test_controller.test_function);


module.exports = router;