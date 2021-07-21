import { Collection } from 'fireorm';
import { FirebaseImage, ISchool, DateRangeType } from '@system/types';

@Collection()
export class School implements ISchool {
  id: string;
  name: string;
  directorId: string;
  image: FirebaseImage;
  schoolYear: DateRangeType;
  location: {
    address: string;
    coordinates: {
      latitud: number;
      longitude: number;
    };
  };
}
