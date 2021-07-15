import FirebaseImage from '../../FirebaseImage';

interface IUser {
  id: string;
  fullName: string;
  dni: string;
  password: string;
  dayOfBirth: Date;
  profileImage: FirebaseImage;
}

export default IUser;
