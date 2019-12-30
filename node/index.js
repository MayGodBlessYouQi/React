var WebSocket = require("ws"),
  // socket.io
  wss = new WebSocket.Server({
    port: 8181
  });
wss.on("connection", function (ws, req) {
  console.log("ip地址：", req.connection.remoteAddress);
  let count = 1;
  setInterval(() => {
    ws.send(++count);
  }, 1000);
  // 接受数据
  ws.on("message", function (message) {
    console.log(message);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send("收到信息");
      }
    });
  });
});