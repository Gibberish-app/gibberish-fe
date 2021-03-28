import React from 'react';
import styles from './gameli.css';

export default function GameLI({ game, handleJoinGame }) {

    return (
        <div
            className={styles.gameli}
            onClick={() => handleJoinGame(game.gameId)}>
            <img src={`/avatars/${game.users[0].avatar}.png`} />
            <span>{game.users[0].userName}</span>
        </div>
    )
}