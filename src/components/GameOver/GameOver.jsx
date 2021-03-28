import React from 'react';
import styles from './gameover.css';

export default function GameOver({ currentGame }) {

    const handleRefresh = () => {
        window.location.reload(false);
    }

    return (
        <div className={styles.gameOver}>

            <h6 className={styles.overText}>GAME OVER!</h6>

            <img src={`/avatars/${currentGame.current.users[0].avatar}.png`} />
            <span>{currentGame.current.users[0].userName}</span>
            <p>Score: {currentGame.current.users[0].score}</p>
            <br />
            <p>VS.</p>
            <br />
            <img src={`/avatars/${currentGame.current.users[1].avatar}.png`} />
            <span>{currentGame.current.users[1].userName}</span>
            <p>Score: {currentGame.current.users[1].score}</p>
            <br />
            <br />
            <button
                onClick={handleRefresh}>
                PLAY AGAIN
            </button>
        </div>
    )
}


