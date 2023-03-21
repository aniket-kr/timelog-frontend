import type { Nominal } from '.';

export type UserId = Nominal<number, 'UserId'>;
export type User = {
    userId: UserId;
    email: string;
};
