import { Director } from '@models/mysql/Director';
import { Teacher } from '@models/mysql/Teacher';
import { Student } from '@models/mysql/Student';

type userType = Director | Teacher | Student;

export interface IGetUser {
    getData(userId:string):Promise<userType|null>;
}
