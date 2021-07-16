import { IClassroom, IClassroomCalendar } from '../../../../types';

export interface IGetClassroomPayload extends Partial<IClassroom> {}

export interface IGetClassroomCalendar {
  getClassroomCalendar(
    classroom: IGetClassroomPayload
  ): Promise<IClassroomCalendar | null>;
}
