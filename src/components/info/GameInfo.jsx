import React from 'react';
import styles from './gameinfo.css';

const GameInfo = ({ currentUser, bag }) => {
    return (
        <div className={styles.info}>
            <img src={`/avatars/${currentUser.avatar}.png`} />
            <span>{currentUser.userName}</span>
            <p>Score: </p>
            <p>Tiles Remaining: {bag}</p>
        </div>
    )
}

export default GameInfo
