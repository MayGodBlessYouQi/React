import io from 'socket.io-client';
// 和服务器的of值对应
const socket = io.connect('http://localhost:8888/my-namespace');

function subscribeToTimer(cb) {
  // 接收
  socket.on('timer', timestamp => cb(null, timestamp));
  // 发送
  socket.emit('subscribeToTimer', 1000);
}

export {
  subscribeToTimer
};