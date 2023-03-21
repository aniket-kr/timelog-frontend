import type { Nominal, ProjectId } from '.';

export type ScheduleId = Nominal<number, 'ScheduleId'>;
export type ScheduleUuid = Nominal<string, 'ScheduleUuid'>;
export type Schedule = {
    scheduleId: ScheduleId;
    scheduleUuid: ScheduleUuid;
    name: string;
    hardViolations: number;
    softViolations: number;
    isPublished: boolean;
    isStale: boolean;
    project: ProjectId;
};

export type Violation = {
    report: string;
    penalty: number;
    conflictType: 'hard' | 'soft';
    reporter: string;
    conflictLevel: 'scheduleLevel' | 'pairLevel';
};
