export class Quiz {
  private roomId: string;
  private hasStarted: boolean;
  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
  }
  start() {
    this.hasStarted = true;
  }
}
