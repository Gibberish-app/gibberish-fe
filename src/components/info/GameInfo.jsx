import React from 'react';
import styles from './gameinfo.css';

const GameInfo = ({ currentUser, bag, currentGame }) => {
    return (
        <div className={styles.info}>
            <img src={`/avatars/${currentUser.avatar}.png`} />
            <span>{currentUser.userName}</span>
            <p>Score: </p>
            <p>VS.</p>
            <img src={`/avatars/${currentGame.users[0].avatar}.png`} />
            <span>{currentGame.users[0].userName}</span>
            <p>Score: </p>
            <br />
            <br />
            <p>Tiles Remaining: {bag}</p>
        </div>
    )
}

export default GameInfo
