import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Sidecart from '../Sidecart/Sidecart';
import './players.css'

const Players = ({handlePlayer,brandTotal}) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
             .then(data => setPlayers(data))
    }, []);
     


    return (
        <div>
            <div className="main-player">
                <div className="">
                    <h1>World Cup Storms</h1>
                    <div className='sub-player'>
                        {
                            players.map((player) => (
                                <Player handlePlayer={handlePlayer}
                                    player={player}
                                    key={player.id}
                                ></Player>
                    ))
                        }
                        

                    </div>
                </div>
                <div className="side-section">
                    <h2>Brand value total player 
                    </h2>
                    <Sidecart brandTotal={brandTotal}></Sidecart>
                </div>
             </div>
            
        </div>
    )
};

export default Players;