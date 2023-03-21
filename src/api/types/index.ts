export enum Day {
    MONDAY = 'MON',
    TUESDAY = 'TUE',
    WEDNESDAY = 'WED',
    THURSDAY = 'THU',
    FRIDAY = 'FRI',
    SATURDAY = 'SAT',
    SUNDAY = 'SUN',
}

export namespace Enum {
    export function getKey<T extends {}>(enumClass: T, value: any): T {
        const i = Object.values(enumClass).indexOf(value);
        return Object.keys(enumClass)[i] as unknown as T;
    }
}

export type Nominal<T, Tag> = T & { readonly __brand: Tag };

export * from './department.type';
export * from './division.type';
export * from './faculty.type';
export * from './lecture.type';
export * from './profile.type';
export * from './project.type';
export * from './room-types.type';
export * from './room.type';
export * from './schedule.type';
export * from './subject.type';
export * from './time-slot.type';
export * from './user.type';
