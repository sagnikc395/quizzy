import http from "http";
import { IOManager } from "./managers/IOManager";

const server = http.createServer();

const io = IOManager.getInstance().io;

io.listen(3000);