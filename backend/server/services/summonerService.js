const champList = require('../config/staticFiles/11.12.1/en_US/championFull.json');

const champKeys = champList.keys;

exports.Summoner = {

    buildProfile(account) {
        return { 
            "summonerName": account.name,
            "summonerLevel": account.summonerLevel,
            "profileIconId": account.profileIconId
            };
    },

    buildRankEntries(rank_data) {
        return rank_data.map(entry => 
            ({
                queueType: entry.queueType,
                tier: entry.tier,
                rank: entry.rank,
                wins: entry.wins,
                losses: entry.losses,
                leaguePoints: entry.leaguePoints
            }));
    },

    buildMatchHistory(match, accountId) {
        
        const playerInfo = (participantIdentities, accountId) => {
            const playerInfo = participantIdentities.find(x => x.player.accountId === accountId);
            const playerId = playerInfo.participantId;
        
            return playerId;
        }
        
        const statsInfo = (playerId, participants) => {
            const participantInfo = participants.find(x => x.participantId === playerId);
            const teamId = participantInfo.teamId;
            
            const championId = participantInfo.championId;
            const championName = champKeys[championId];
        
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
                championName: championName,
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

        const playerInfo_data = playerInfo(match.participantIdentities, accountId);
        const statsInfo_data = statsInfo(playerInfo_data, match.participants);
   

        const match_history_results = {...playerInfo_data, ...statsInfo_data};
        return match_history_results;
    },

    buildChampionMastery(masteries) {
        return masteries.map(entry => ({
            id: entry.championId,
            name: champKeys[entry.championId],
            level: entry.championLevel,
            points: entry.championPoints
        }));
    }

}