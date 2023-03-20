import type { IProject, IRoom, ISubject, ITimeSlot } from './project.interface';
import type { IFaculty } from './user.interface';

export interface ISchedule {
    id: number;
    project: IProject;
    lectures: ILecture[];
}

export interface ILecture {
    id: number;
    schedule: ISchedule;
    room: IRoom;
    subject: ISubject;
    faculty: IFaculty;
    timeSlot: ITimeSlot;
}
