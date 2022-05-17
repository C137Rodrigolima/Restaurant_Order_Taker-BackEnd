import app from "./app.js";
import dotenv from "dotenv";
import http from 'http';
import { Server } from "socket.io";

dotenv.config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on("POST order", (order)=>{
    console.log(order);
  })
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});




// const server = http.createServer(app);

// const io = new Server(server);

// io.on("connection", (socket)=> {
//   console.log('a user connected');
//   console.log(socket.id);
// })