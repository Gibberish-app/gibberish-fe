import React from 'react';
import styles from './gameinfo.css';

const GameInfo = (currentUser) => {
    return (
        <div className={styles.info}>
            <img src={`/avatars/${currentUser.currentUser.avatar}.png`} />
            <span>{currentUser.currentUser.name}</span>
            <p>Score: </p>
        </div>
    )
}

export default GameInfo
