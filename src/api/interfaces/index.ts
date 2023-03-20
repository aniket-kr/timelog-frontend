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

export * from './project.interface';
export * from './schedule.interface';
export * from './user.interface';
