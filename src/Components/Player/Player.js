import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'



import './Player.css'


const Player = ({ player, handlePlayer }) => {   
    
    return (
        <div className='player-container'>
            
            <img src={player. image} alt="" />
            
            <div className="player-title">
                <h4> Name: { player.PlayerName}</h4>
                <p>Age: {player. age} </p>
                <p>Brand Value: {player.branValue }</p>
                <p>Club : {player. club}</p>
                <p>Goal: {player. goals} </p>
            </div>
            
            <button  className='btn-section' onClick={()=>handlePlayer(player.branValue)} >
                
                Add all Brand value
               <AiOutlineShoppingCart ></AiOutlineShoppingCart>
            </button>
            
        </div>
    );
};

export default Player;