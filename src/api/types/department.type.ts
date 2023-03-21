import type { Nominal, ProjectId } from '.';

export type DepartmentId = Nominal<number, 'DepartmentId'>;
export type Department = {
    departmentId: DepartmentId;
    name: string;
    project: ProjectId;
};
