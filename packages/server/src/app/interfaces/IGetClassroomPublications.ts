import { IPublications } from '../../../../types';

export interface IGetClassroomPublications {
  getData(clasroomId: string): Promise<IPublications[]>;
}
