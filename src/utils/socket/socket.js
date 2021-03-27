import io from 'socket.io-client';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const socket = io.connect(serverUrl);
