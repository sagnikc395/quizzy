import { IOManager } from "./IOManager";
import { Quiz } from "./Quiz";

export class QuizManager {
  private quizzes: Quiz[];
  constructor() {
    this.quizzes = [];
  }

  public start(roomId: string) {
    const io = IOManager.getIo();
    const quiz = this.quizzes.find(x => x.roomId === roomId);
    quiz.start();
  }

  public next(roomId: string) {
    const io = IOManager.getIo();
    io.to(roomId).emit({
      type: "START_ADDR",
    });
  }
}
