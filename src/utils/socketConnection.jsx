import io from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000', {
    auth: { token: import.meta.env.VITE_AUTH_TOKEN },
    withCredentials: true,
    transports: ['websocket', 'polling']
});

socket.on('welcome', (data) => {
    console.log(data);
});

export default socket;
