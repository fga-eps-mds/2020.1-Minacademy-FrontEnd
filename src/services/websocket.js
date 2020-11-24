import io from 'socket.io-client';

/* eslint-disable no-console */

const websocket = io.connect(process.env.REACT_APP_SERVER_URL, {
  path: '/api/socket.io',
  query: `token=${sessionStorage.getItem('accessToken')}`// eslint-disable-line no-undef
})

websocket.on('error', (e) => {
  console.log('socket error: ', e);
});

websocket.on('connect', () => {
  console.log('socket connected: ', websocket.id);
});

websocket.on('disconnect', (reason) => {
  console.log('socket disconnected. Reason: ', reason)
});

websocket.on('TESTE', data => console.log("teste: ", data))

const openWebSocket = (token) => {
  if (websocket.disconnected) {
    websocket.disconnect();
    websocket.io.opts.query = `token=${token}`;
    websocket.connect()
  }
};

const closeWebSocket = () => {
  if (websocket.connected) {
    websocket.close()
  }
}

export {
  websocket,
  openWebSocket,
  closeWebSocket
};