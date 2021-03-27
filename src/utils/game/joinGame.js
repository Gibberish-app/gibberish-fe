import socket from '../socket/socket'

export default function joinGame(user, gameId) {
    socket.emit("JOIN_GAME", (user, gameId))
}