let express = require("express");
let path = require("path");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let port = 8080;


app.use("/", express.static(path.join(__dirname, "dist/FIT2095-Lab11")));


io.on("connection", socket => {
  console.log("connect sucessfull");
  socket.on('payload', teamsObj);
  socket.on('newItems', (newItemObj)=> {
    teamsObj.items.push(newItemObj);
    io.emit('payload', teamsObj)
  });
  
});

server.listen(port, () => {
  console.log("Listening on port " + port);
});

function getCurrentDate() {
  let d = new Date();
  return d.toLocaleString();
}



