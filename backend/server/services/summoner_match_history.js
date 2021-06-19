

// var match_history_json_template = {
//     playerIdentity: "",
//     playerTeamId: "",
//     championName: "",
//     championIcon: "",
//     items: [],
//     score: [],
//     win: true,
// }

// Dynamically creates a JavaScript object to be converted to JSON response
exports.buildMatchHistory = (match_history, accountId) => {

    const playerInfo_data = playerInfo(match_history.participantIdentities, accountId);
    const statsInfo_data = statsInfo(playerInfo_data, match_history.participants);
   

    const match_history_results = {...playerInfo_data, ...statsInfo_data};

    return match_history_results;


}

const playerInfo = (participantIdentities, accountId) => {
    const playerInfo = participantIdentities.find(x => x.player.accountId === accountId);
    const playerId = playerInfo.participantId;

    return playerId;
}

const statsInfo = (playerId, participants) => {
    const participantInfo = participants.find(x => x.participantId === playerId);
    const teamId = participantInfo.teamId;
    
    const championId = participantInfo.championId;
    const spell_1 = participantInfo.spell1Id;
    const spell_2 = participantInfo.spell2Id;

    const playerStats = participantInfo.stats;

    const win = playerStats.win;
    const items = [playerStats.item0, playerStats.item1,playerStats.item3, playerStats.item4, playerStats.item5, playerStats.item6];
    const kda = [playerStats.kills, playerStats.deaths, playerStats.assists];

    const timeline = participantInfo.timeline;
    const role = timeline.role;
    const lane = timeline.lane;

    const data_results = {
        championId: championId,
        spell_1: spell_1,
        spell_2: spell_2,
        win: win,
        items: items,
        kda: kda,
        role: role,
        lane: lane
    };

    return data_results;

}
