import { IOManager } from "./managers/IOManager";

type AllowedSubmissions = 0 | 1 | 2 | 3;

interface Problem {
  id: string;
  title: string;
  description: string;
  image: string;
  answer: 0 | 1 | 2 | 3;
  option: {
    id: number;
    title: string;
  };
  submissions: Submission[];
}

interface User {
  name: string;
  id: string;
}

interface Submission {
  problemId: string;
  userId: string;
  isCorrect: boolean;
  optionsSelected: AllowedSubmissions;
}

export class Quiz {
  public roomId: string;
  private hasStarted: boolean;
  private problems: Problem[];
  private activeProblem: number;
  private users: User[];

  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
    this.problems = [];
    this.activeProblem = 0;
    this.users = [];
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
  randomString(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = " ";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  addUser(name: string) {
    const id = this.randomString(8);
    this.users.push({ id, name });
    return id;
  }

  submit(
    userId: string,
    roomId: string,
    problemId: string,
    submission: 0 | 1 | 2 | 3
  ) {
    const problem = this.problems.find((x) => x.id === problemId);
    if (problem) {
      const exisitingSubmission = problem.submissions.find(
        (x) => x.userId == userId
      );
      if (exisitingSubmission) {
        return;
      }
      problem.submissions.push({
        problemId,
        userId,
        isCorrect: problem.answer === submission,
        optionsSelected: submission,
      });
    }
  }
}
