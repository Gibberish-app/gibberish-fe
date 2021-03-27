import socket from '../socket/socket'

export default function checkWord(word) {
    socket.emit("CHECK_WORD", word);

    socket.on("WORD_CHECKED", response => {
        return response;
    })
}