import socket from '../socket/socket'

export default function playWord(newGameBoard) {
    socket.emit("PLAY_WORD", newGameBoard);
}