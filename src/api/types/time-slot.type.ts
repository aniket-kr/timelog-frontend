import type { Day, Nominal, ProjectId } from '.';

export type TimeSlotId = Nominal<number, 'TimeSlotId'>;
export type TimeSlot = {
    timeSlotId: TimeSlotId;
    startTime: string;
    endTime: string;
    day: Day;
    project: ProjectId;
};
