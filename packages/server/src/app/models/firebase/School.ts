import { Collection } from 'fireorm';
import { FirebaseImage, ISchool } from '@system/types';

@Collection()
class School implements ISchool {
  id: string;
  name: string;
  directorId: string;
  image: FirebaseImage;
  location: {
    address: string;
    coordinates: {
      latitud: number;
      longitude: number;
    };
  };
}

export default School;
