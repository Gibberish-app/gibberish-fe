import React from 'react'

export default function GameOver({ currentGame }) {

    const handleRefresh = () => {
        window.location.reload(false);
    }

    return (
        <div styles={{ height: '100vh', width: '100vw' }}>

            <p>GAME OVER!</p>

            <img src={`/avatars/${currentGame.current.users[0].avatar}.png`} />
            <span>{currentGame.current.users[0].userName}</span>
            <p>Score: {currentGame.current.users[0].score}</p>
            <p>VS.</p>
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


