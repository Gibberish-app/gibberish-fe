
import React, { useState, useRef, useEffect } from 'react'
import LandingPage from './LandingPage/LandingPage';
import Board from '../components/board/Board';
import Player from '../components/player/Player';
import GameInfo from '../components/info/GameInfo';
import Header from '../components/header/Header';
import WaitingPopup from '../components/WaitingPopup/WaitingPopup'
import GameOver from '../components/GameOver/GameOver'
import { socket } from '../utils/socket/socket';

const GameWindow = () => {
    const [active, setActive] = useState(false);
    const currentUser = useRef({})
    const currentGame = useRef({})
    const [currentPlay, setCurrentPlay] = useState([])
    const [currentHand, setCurrentHand] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [waiting, setWaiting] = useState(false)
    const [width, setWidth] = useState('100%')
    const secondWaiting = useRef(false)


    const handleActive = () => {
        setActive(true);
    };

    const toggleWaiting = () => {
        const newWaiting = !secondWaiting.current;
        secondWaiting.current = !secondWaiting.current;
        console.log("🚀 ~ file: GameWindow.jsx ~ line 25 ~ toggleWaiting ~ newWaiting", newWaiting)
        setWaiting(newWaiting);

    }

    const handleCurrentGame = (newGame) => {
        currentGame.current = newGame;
        if (newGame.users[1].socketId === currentUser.socketId) {
            toggleWaiting();
        }
    }

    const addTile = (tile, index) => {
        if (!waiting) {
            currentHand.splice(index, 1)
            setCurrentHand(currentHand)
            setCurrentPlay([...currentPlay, tile])
        }
    }

    const removeTile = (tile, index) => {
        if (!waiting) {
            currentPlay.splice(index, 1)
            setCurrentPlay(currentPlay);
            setCurrentHand([...currentHand, tile])
        }
    }

    const seedHand = (tileArray) => {
        setCurrentHand([...currentHand, ...tileArray])
    }

    const clearPlay = () => {
        setCurrentPlay([])
    }

    const handleSubmit = () => {
        if (!waiting) {
            socket.emit("CHECK_WORD", ({ tileArray: currentPlay, gameState: currentGame.current }))
            setWidth('875px')
        }
    }

    useEffect(() => {
        socket.on("WORD_CHECKED", response => {
            window.alert(response)
        })

        socket.on("WORD_PLAYED", ({ updatedGame, lastPlayed }) => {
            console.log('WORD_PLAYED')
            currentGame.current = updatedGame;
            setActive(true);
            toggleWaiting();
            console.log("🚀 ~ file: GameWindow.jsx ~ line 76 ~ useEffect ~ secondWaiting.current", secondWaiting.current)
        })

        socket.on("GAME_OVER", ({ updatedGame, lastPlayed }) => {
            console.log('GAME_OVER');
            setGameOver(true);
        })

    }, [socket])

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
                        currentGame={currentGame} />
                    <Player
                        currentGame={currentGame}
                        addTile={addTile}
                        currentHand={currentHand}
                        seedHand={seedHand}
                        clearPlay={clearPlay}
                        handleSubmit={handleSubmit}
                        waiting={waiting}
                    />
                </div>
                :
                <LandingPage
                    handleActive={handleActive}
                    currentUser={currentUser}
                    currentGame={currentGame}
                    handleCurrentGame={handleCurrentGame}
                    toggleWaiting={toggleWaiting}
                />
            }
            {waiting ?
                <div>
                    <WaitingPopup width={width} />
                </div>
                : null
            }
            {gameOver ?
                <div>
                    <GameOver />
                </div>
                : null
            }
        </div>
    )
}

export default GameWindow
