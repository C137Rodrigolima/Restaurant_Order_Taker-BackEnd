import app from "./app.js";
import dotenv from "dotenv";
import http from 'http';
import { Server } from "socket.io";
import { OrderServices } from "./services/orderServices.js";
dotenv.config();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`user ${socket.id} connected`);

  socket.on('join_table', (data) => {
    console.log("user joined on table: " + data);
    socket.join(data);
  });

  socket.on("new_order", ()=>{
    socket.broadcast.emit("new_order_arrived");
  });

  socket.on("Finish_Order", async (data) =>{
    const alterado = await OrderServices.updateOrder(data.orderId);

    socket.to(data.table).emit("Order_Coming", alterado);
    socket.emit("new_order_arrived");
  })
  
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});