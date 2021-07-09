import { Collection } from 'fireorm';
import { FirebaseImage } from '@system/types';

@Collection()
class School {
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
