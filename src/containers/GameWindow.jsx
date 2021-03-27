import React, { useState, useRef } from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from '../components/player/Player';
import GameInfo from '../components/info/GameInfo';
import Header from '../components/header/Header';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [currentGame, setCurrentGame] = useState({})

    const handleActive = () => {
        setActive(true);
    };

    return (
        <div>
            {active ?
                <div>
                    <Header />
                    <Board />
                    <GameInfo
                        currentUser={currentUser}
                        currentGame={currentGame} />
                    <Player setBag={setBag} />
                </div>
                :
                <LandingPage
                    handleActive={handleActive}
                    setCurrentUser={setCurrentUser}
                    setCurrentGame={setCurrentGame}
                    currentUser={currentUser}
                />
            }
        </div>
    )
}

export default GameWindow
