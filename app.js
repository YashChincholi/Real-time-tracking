const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const socketio = require("socketio");
const io = socketio(server);

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(3000);
