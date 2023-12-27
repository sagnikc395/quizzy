import http from "http";
import { Server } from "socket.io";

const server = http.createServer();
const io = new Server(server);

io.on("connection", () => {});

server.listen(3000);
