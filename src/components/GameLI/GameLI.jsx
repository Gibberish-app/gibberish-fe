import React from 'react';


export default function GameLI({ game, handleJoinGame }) {

    return (
        <li
            onClick={() => handleJoinGame(game.gameId)}>

            {game.users[0].userName}

            <img src={`/avatars/${game.users[0].avatar}.png`} />
        </li>
    )
}