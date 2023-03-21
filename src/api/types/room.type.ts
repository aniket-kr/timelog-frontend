import type { DepartmentId, Nominal, ProjectId, RoomTypeId } from '.';

export type RoomId = Nominal<number, 'RoomId'>;
export type Room = {
    roomId: RoomId;
    code: string;
    capacity: number;
    roomType: RoomTypeId;
    department: DepartmentId;
    project: ProjectId;
};
