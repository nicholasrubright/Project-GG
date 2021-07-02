import React from 'react';

export default function Mastery(props) {
    
    const mastery = props.masteryInfo.map((entry) => {
        
        return (
            <div className="col" style={{padding: "10px"}}>
                <img alt="#" className="championIcon" src={`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${entry.name}.png`} />
                <h6>Level: {entry.level}</h6>
                <h6>{entry.points} pts</h6>
            </div>
        )
    })


    return (
        <div className="container g-0" id="mastery-card" style={{paddingTop: "1rem"}}>
             <div className="card text-center rank-card" style={{width: "18rem"}}>
                    <div className="card-title">
                        <h4>Champion Mastery</h4>
                    </div>
                    <div className="card-body">
                        
                        {mastery}

                    </div>
                </div>
        </div>
    );
};