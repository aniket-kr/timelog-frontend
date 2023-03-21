import type { Nominal, ProjectId } from '.';

export type DivisionId = Nominal<number, 'DivisionId'>;
export type Division = {
    divisionId: DivisionId;
    name: string;
    strength: number;
    project: ProjectId;
};
