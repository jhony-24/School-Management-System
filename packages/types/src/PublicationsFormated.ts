import { Homework } from '@models/mysql/Homework';
import FirebaseFileType from './FirebaseFileType';
import IPublications from './models/firebase/IPublications';

type PublicationsFormated = IPublications & {
  homework?: Homework;
};

export default PublicationsFormated;
