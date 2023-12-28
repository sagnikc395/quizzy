import { Server } from "socket.io";
import http from "http";

const server = http.createServer();

export class IOManager {
  private static io: Server;
  private static instance: IOManager;

  public static getIo() {
    //singleton.
    if (!this.instance) {
      const io = new Server(server);
      this.io = io;
    }
    return this.io;
  }
}
