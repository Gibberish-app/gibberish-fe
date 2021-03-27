import socket from '../socket/socket'

export default function createGame(user) {

    socket.emit("CREATE_GAME", user);

    socket.on("GAME_CREATED", newGame => {
        return newGame
    })
}