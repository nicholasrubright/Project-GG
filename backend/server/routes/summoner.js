var express = require('express');
var router = express.Router();

// Controllers
var summonerController = require('../controller/summonerController');
var test_controller = require('../controller/testController');

// Router to index
router.get('/', (req, res) => {
    res.redirect('/');
});


router.get('/:summoner_name/profile', summonerController.profile);
router.get('/:summoner_name/rankStats', summonerController.rankStats);
router.get('/:summoner_name/matchHistory', summonerController.matchHistory);


router.get('/test', test_controller.test_function);


module.exports = router;