import app from "./app.js";
import dotenv from "dotenv";
import http from 'http';
import { Server } from "socket.io";
import { OrderServices } from "./services/orderServices.js";
dotenv.config();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "postgres://spbnawcalfrrjt:2c0e61885b77fe3d0e7e535e935374ebdca2c77c1cf4f839187f736125e7b0d3@ec2-34-231-177-125.compute-1.amazonaws.com:5432/dh8ns3i6ggtvv",
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
