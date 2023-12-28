import http from "http";
import { IOManager } from "./managers/IOManager";

const server = http.createServer();

const io = IOManager.getIo();

io.on("connection", (client) => {
  client.on("event", (data) => {
    const type = data.type;
  });

  client.on("disconnect", () => {});
});

io.listen(3000);
