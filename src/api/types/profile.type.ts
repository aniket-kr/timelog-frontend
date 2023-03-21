import type { Nominal } from '.';

export type ProfileId = Nominal<number, 'ProfileId'>;
export type Profile = {
    profileId: ProfileId;
    firstName: string;
    lastName?: string;
    bio?: string;
    avatarUrl?: string;
};
