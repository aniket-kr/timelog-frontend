import type { Nominal, ProjectId } from '.';

export type RoomTypeId = Nominal<number, 'RoomTypeId'>;
export type RoomType = {
    roomTypeId: RoomTypeId;
    name: string;
    project: ProjectId;
};
