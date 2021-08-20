import { IClassroomCalendar } from '@system/types';

export default class GetCurrentAssistanceByDate {
  private assistanceIndex!: number;
  constructor(
    private readonly classroomCalendar: IClassroomCalendar,
    private readonly date: string
  ) {}

  private getCurrentIndexAssistanceByDate() {
    this.assistanceIndex = this.classroomCalendar.assistance.findIndex(
      (currentAssistance) => {
        return currentAssistance.createdAt === this.date;
      }
    );
    return this.assistanceIndex;
  }

  private getCurrentAssistance() {
    return this.classroomCalendar.assistance[this.assistanceIndex] || {};
  }

  getAssistance() {
    return {
      index: this.getCurrentIndexAssistanceByDate(),
      assistance: this.getCurrentAssistance(),
    };
  }
}
