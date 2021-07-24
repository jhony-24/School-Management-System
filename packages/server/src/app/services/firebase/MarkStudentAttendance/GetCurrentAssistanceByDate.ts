import { IClassroomCalendar } from '@system/types';
import AssistanceDate from './AssistanceDate';

export default class GetCurrentAssistanceByDate {
  private assistanceIndex!: number;
  constructor(
    private readonly classroomCalendar: IClassroomCalendar,
    private readonly assistanceDate: AssistanceDate
  ) {}

  private getCurrentIndexAssistanceByDate() {
    const searchedDate = this.assistanceDate.getDate();
    this.assistanceIndex = this.classroomCalendar.assistance.findIndex(
      (currentAssistance) => {
        return currentAssistance.createdAt === searchedDate;
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
