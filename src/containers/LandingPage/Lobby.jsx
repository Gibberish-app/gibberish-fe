import React, { useState, useEffect } from 'react';
import { socket } from '../../utils/socket/socket';
import GameLI from '../../components/GameLI/GameLI'


export default function Lobby({ handleActive, currentUser, setCurrentGame }) {
    const [gameList, setGameList] = useState([])

    useEffect(() => {
        socket.emit("GAME_LIST", null);
    }, [])

    useEffect(() => {
        socket.on("GAME_LIST", returnedGameList => {
            setGameList(returnedGameList)
        });

        socket.on("GAME_CREATED", newGame => {
            setCurrentGame(newGame);
            handleActive();
        })

        socket.on("GAME_JOINED", newGame => {
            setCurrentGame(newGame);
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
        <div>
            <button
                onClick={createGame}>
                CREATE GAME
            </button>
            <ul>
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
            </ul>
        </div>
    )

}