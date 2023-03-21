import type { Nominal, ProjectId, UserId } from '.';

export type FacultyId = Nominal<number, 'FacultyId'>;
export type Faculty = {
    facultyId: FacultyId;
    code: string;
    user: UserId;
    project: ProjectId;
};
