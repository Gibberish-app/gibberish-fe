import socket from '../socket/socket'

export default function createUser(userName, avatar) {

    socket.emit("CREATE_USER"({ userName, avatar }));

    socket.on("USER_CREATED", newUser => {
        return newUser
    })
}