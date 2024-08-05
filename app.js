const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

app.get("/", function (req, res) {
  res.send("hello");
});

server.listen(3000);
