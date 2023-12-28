import { IOManager } from "./IOManager";

interface Problem {
  title: string;
  description: string;
  image: string;
  answer: string;
  option: {
    id: number;
    title: string;
  };
}

export class Quiz {
  private roomId: string;
  private hasStarted: boolean;
  private problems: Problem[];
  private activeProblem: number;

  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
    this.problems = [];
    this.activeProblem = 0;
  }

  addProblem(problem: Problem) {
    this.problems.push(problem);
  }

  start() {
    this.hasStarted = true;
    const io = IOManager.getIo();
    io.emit("CHANGE_PROBLEM", {
      problem: this.problems[0],
    });
  }

  next() {
    this.activeProblem += 1;
    const problem = this.problems[this.activeProblem];
    const io = IOManager.getIo();
    if (problem) {
      io.emit("CHANGE_PROBLEM", {
        problem,
      });
    } else {
      io.emit("QUIZ_END", {
        problem, 
      });
    }
  }
}
