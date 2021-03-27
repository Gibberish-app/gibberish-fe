import socket from '../socket/socket'

export default function gameList() {
    socket.emit("GAME_LIST");

    socket.on("GAME_LIST", openGames => {
        return openGames;
    })
}