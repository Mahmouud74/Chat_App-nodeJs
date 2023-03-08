const express = require("express");
const socket = require("socket.io");
const app = express();
//const server = require("http").Server(app);
let usersConnected = 0;
let printName = "";
const PORT = process.env.PORT || 3232;
const server = app.listen(PORT, () => {
  // console.log("Listening to request on port...");
});
//App setup
app.use(express.static("public"));


//Static files

//Socket setup
const io = socket(server);

//Liten for possible connection with client
io.on("connection", socket => {
  usersConnected++;

  //username received
  socket.on("username", data => {
    console.log(data);
    io.sockets.emit("username", data);
  });

  //Message events from the client
  socket.on("newMessage", data => {
    console.log(data);
    io.sockets.emit("newMessage", data);
  });




});
