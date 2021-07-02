import React from 'react';

export default function Mastery(props) {
    
    // const mastery = props.championMastery.map((entry) => {
    //     <div className="col">
    //         <img alt="#" className="championIcon" src="http://localhost:3001/summoner/${summoner_name}/profile" />
    //         <p>121323pts</p>
    //     </div>
    // })


    return (
        <div className="container g-0" id="mastery-card" style={{paddingTop: "1rem"}}>
             <div className="card text-center rank-card" style={{width: "18rem"}}>
                    <div className="card-title">
                        <h4>Champion Mastery</h4>
                    </div>
                    <div className="card-body">
                        
                        <div className="col">
                            <img alt="#" className="championIcon" src="http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Lulu.png" />
                            <p>121323pts</p>
                        </div>

                        <div className="col">
                            <img alt="#" className="championIcon" src="http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Lulu.png" />
                            <p>121323pts</p>
                        </div>

                        <div>
                            <img alt="#" className="championIcon" src="http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/Lulu.png" />
                            <p>121323pts</p>
                        </div>

                    </div>
                </div>
        </div>
    );
};