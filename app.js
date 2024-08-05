const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("hello");
});

server.listen(3000);
