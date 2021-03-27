import socket from '../socket/socket'

export default function gameList() {

    socket.on("GAME_LIST", openGames => {
        return openGames;
    })
}