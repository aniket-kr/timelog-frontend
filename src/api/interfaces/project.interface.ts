import { Day } from '.';
import type { ILecture, ISchedule } from './schedule.interface';
import type { IFaculty, IUser } from './user.interface';

export interface IProject {
    id: number;
    name: string;
    owner: IUser;
    subjects: ISubject[];
    departments: IDepartment[];
    schedules: ISchedule[];
    faculties: IFaculty[];
    roomTypes: IRoomType[];
    rooms: IRoom[];
    divisions: IDivision[];
    timeSlots: ITimeSlot[];
}

export interface ISubject {
    id: number;
    name: string;
    code: string;
    project: IProject;
    lectures: ILecture[];
    faculties: IFaculty[];
}

export interface IDepartment {
    id: number;
    name: string;
    project: IProject;
    rooms: IRoom[];
}

export interface IRoomType {
    id: number;
    name: string;
    project: IProject;
    rooms: IRoom[];
}

export interface IRoom {
    id: number;
    code: string;
    capacity: number;
    department: IDepartment;
    lectures: ILecture[];
    type: IRoomType;
}

export interface IDivision {
    id: number;
    name: string;
    strength: number;
    project: IProject;
}

export interface ITimeSlot {
    id: number;
    startMinutes: number;
    endMinutes: number;
    day: Day;
    project: IProject;
    lectures: ILecture[];
}
