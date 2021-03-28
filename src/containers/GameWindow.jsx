
import React, { useState, useRef, useEffect } from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from '../components/player/Player';
import GameInfo from '../components/info/GameInfo';
import Header from '../components/header/Header';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [currentGame, setCurrentGame] = useState({})
    const [currentPlay, setCurrentPlay] = useState([])

    const handleActive = () => {
        setActive(true);
    };

    const addTile = (tile) => {
        setCurrentPlay([...currentPlay, tile])
        console.log(tile)
    }


    return (
        <div>
            {active ?
                <div>
                    <Header />
                    <Board
                        currentPlay={currentPlay} />
                    <GameInfo
                        currentUser={currentUser}
                        currentGame={currentGame} />
                    <Player
                        currentGame={currentGame}
                        addTile={addTile}
                    />
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
