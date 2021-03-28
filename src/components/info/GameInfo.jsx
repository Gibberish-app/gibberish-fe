import React from 'react';
import styles from './gameinfo.css';

const GameInfo = ({ currentGame }) => {
    return (
        <div className={styles.info}>
            <img src={`/avatars/${currentGame.current.users[0].avatar}.png`} />
            <span>{currentGame.current.users[0].userName}</span>
            <p>Score: {currentGame.current.users[0].score}</p>
            <p>VS.</p>
            <img src={`/avatars/${currentGame.current.users[1].avatar}.png`} />
            <span>{currentGame.current.users[1].userName}</span>
            <p>Score: {currentGame.current.users[1].score}</p>
            <br />
            <br />
            <p>Tiles Remaining: {currentGame.current.bag.length}</p>
        </div>
    )
}

export default GameInfo;
