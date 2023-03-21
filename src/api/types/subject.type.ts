import type { Nominal, ProjectId } from '.';

export type SubjectId = Nominal<number, 'SubjectId'>;
export type Subject = {
    subjectId: SubjectId;
    name: string;
    code: string;
    roomType: RoomTypeId;
    project: ProjectId;
};
