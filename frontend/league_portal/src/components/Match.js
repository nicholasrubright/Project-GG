import react from 'react';


export default function Match(props) {

    const championName = props.data.championName;
    const spell_1 = props.data.spell_1;
    const spell_2 = props.data.spell_2;
    const win = props.data.win;
    const items = props.data.items;
    const kda = props.data.kda;
    const role = props.data.role;
    const lane = props.data.lane;

    const champIconURL = `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${championName}.png`;

    const itemsIconURL = {
        item1: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[0]}.png`,
        item2: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[1]}.png`,
        item3: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[2]}.png`,
        item4: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[3]}.png`,
        item5: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[4]}.png`,
        item6: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${items[5]}.png`
    };

    const match_item = 
        <div>
            <div className="container match_card" style={{backgroundColor: win ? "#BADEFC" : "#EB5160"}}>
                <div className="row align-items-center">
                    <div className="col">
                        <img className="championIcon" src={champIconURL} />
                    </div>
                    <div className="col">
                        <h3>{win ? "Win" : "Loss"}</h3>
                    </div>
                    <div className="col">
                        <h3>{kda[0]}/{kda[1]}/{kda[2]}</h3>
                    </div>
                    <div className="col">
                        <div class="container">
                            <div class="row row-cols-3">
                                <div class="col" ><img className="itemIcon" src={itemsIconURL.item1} /></div>
                                <div class="col"><img className="itemIcon" src={itemsIconURL.item2} /></div>
                                <div class="col"><img className="itemIcon" src={itemsIconURL.item3} /></div>
                                <div class="col"><img className="itemIcon" src={itemsIconURL.item4} /></div>
                                <div class="col"><img className="itemIcon" src={itemsIconURL.item5} /></div>
                                <div class="col"><img className="itemIcon" src={itemsIconURL.item6} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    return (
        <div>
            {match_item}
        </div>
    );

}