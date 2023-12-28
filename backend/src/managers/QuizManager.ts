import { IOManager } from "./IOManager";
import { Quiz } from "../Quiz";

export class QuizManager {
  private quizzes: Quiz[];
  constructor() {
    this.quizzes = [];
  }

  public start(roomId: string) {
    const io = IOManager.getIo();
    const quiz = this.quizzes.find((x) => x.roomId === roomId);
    quiz.start();
  }

  public next(roomId: string) {
    const io = IOManager.getIo();
    io.to(roomId).emit({
      type: "START_ADDR",
    });
  }

  addUser(roomId: string, name: string) {
    return this.getQuiz(roomId)?.addUser(name);
  }

  getQuiz(roomId: string) {
    return this.quizzes.find((x) => x.roomId === roomId) ?? null;
  }

  submit(roomId: string, submission: 0 | 1 | 2 | 3, problemId: string) {
    return this.getQuiz(roomId)?.submit(roomId, problemId, submission);
  }
}
