import type { IProject, ISubject } from './project.interface';
import type { ILecture } from './schedule.interface';

export interface IUser {
    id: number;
    email: string;
    profile?: IUserProfile;
    projects: IProject[];
}

export interface IUserProfile {
    id: number;
    firstName: string;
    lastName?: string;
    bio?: string;
    avatarUrl?: string;
    user: IUser;
}

export interface IFaculty {
    id: number;
    project: IProject;
    code: string;
    user: IUser | null;
    lectures: ILecture[];
    subjects: ISubject[];
}
