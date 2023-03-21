import type { Nominal, UserId } from '.';

export type ProjectId = Nominal<number, 'ProjectId'>;
export type Project = {
    projectId: ProjectId;
    owner: UserId;
    name: string;
};
