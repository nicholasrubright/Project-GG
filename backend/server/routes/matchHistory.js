var express = require('express');

var router = express.Router();

var match_controller = require('../controller/matchController');

router.get('/:summoner_name/match_history', match_controller.match_history);

module.exports = router;