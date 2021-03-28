import React, { useState, useEffect } from 'react';
import { socket } from '../../utils/socket/socket';
import GameLI from '../../components/GameLI/GameLI'
import styles from './LandingPage.css'

export default function Lobby({ handleActive, currentUser, currentGame, handleCurrentGame, toggleWaiting }) {
    const [gameList, setGameList] = useState([])

    useEffect(() => {
        socket.emit("GAME_LIST", null);
    }, [])

    useEffect(() => {
        socket.on("GAME_LIST", returnedGameList => {
            setGameList(returnedGameList)
        });

        socket.on("GAME_CREATED", newGame => {
            console.log("🚀 ~ file: Lobby.jsx ~ line 24 ~ useEffect ~ newGame ", newGame)
            toggleWaiting();
        })

        socket.on("PLAYER_JOINED", newGame => {
            console.log(newGame)
            currentGame.current = newGame
            handleCurrentGame(newGame);
            handleActive();
        })

        socket.on("GAME_JOINED", newGame => {
            currentGame.current = newGame;
            handleCurrentGame(newGame);
            handleActive();
        })
    }, [socket])

    const createGame = () => {
        socket.emit("CREATE_GAME", currentUser);
    }

    const handleJoinGame = (gameId) => {
        socket.emit("JOIN_GAME", ({ user: currentUser, gameId }));
    }

    return (
        <div className={styles.lobby}>
            <button
                className={styles.newGame}
                onClick={createGame}>
                CREATE NEW GAME
            </button>
            <div>
                <p className={styles.waiting}>Waiting For Players:</p>
                {gameList.length > 0 ?
                    gameList.map((game, index) => (
                        <GameLI
                            game={game}
                            key={index}
                            handleJoinGame={handleJoinGame}
                        />
                    )
                    )
                    : null
                }
            </div>
        </div>
    )

}