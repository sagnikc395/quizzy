import http from "http";
import { Server } from "socket.io";
import { IOManager } from "./managers/IOManager";

const server = http.createServer();
const io = new Server(server);

const ioManager = new IOManager(io);

io.on("connection", (client) => {
  client.on("event", (data) => {
    const type = data.type;

  });
  client.on("disconnect", () => {
    /** */
  });
});

io.listen(3000);
