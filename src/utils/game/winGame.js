import socket from '../socket/socket'

export default function winGame(gameId) {
    socket.emit("WIN_GAME", gameId)
}