import { IOManager } from "./managers/IOManager";

const io = IOManager.getIo();

io.on("connection", (client) => {
  client.on("event", (data) => {
    const type = data.type;
    //3 admin events 
    //2 client events
    //QuizManager => Quiz => broadcast

  });

  client.on("disconnect", () => {});
});

io.listen(3000);
