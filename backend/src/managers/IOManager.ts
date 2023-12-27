import { Server } from "socket.io";
import http from "http";

const server = http.createServer();

export class IOManager {
  private static io: Server;
  private static instance: IOManager;

  public static getInstance() {
    const io = new Server(server);
    if (!this.instance) {
      this.instance = new IOManager();
      this.io = io;
    }
    return this.instance.io;
  }
}
