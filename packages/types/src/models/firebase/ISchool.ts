import FirebaseImage from '../../FirebaseImage';

interface ISchool {
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

export default ISchool;
