
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
    const [currentHand, setCurrentHand] = useState([])

    const handleActive = () => {
        setActive(true);

    };

    const addTile = (tile, index) => {
        currentHand.splice(index, 1)

        setCurrentHand(currentHand)
        setCurrentPlay([...currentPlay, tile])
    }

    const removeTile = (tile, index) => {
        currentPlay.splice(index, 1)
        setCurrentPlay(currentPlay);
        setCurrentHand([...currentHand, tile])
    }

    const seedHand = (tileArray) => {
        setCurrentHand([...currentHand, ...tileArray])
    }

    return (
        <div>
            {active ?
                <div>
                    <Header />
                    <Board
                        currentPlay={currentPlay}
                        removeTile={removeTile}
                    />
                    <GameInfo
                        currentUser={currentUser}
                        currentGame={currentGame} />
                    <Player
                        currentGame={currentGame}
                        addTile={addTile}
                        currentHand={currentHand}
                        seedHand={seedHand}
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
