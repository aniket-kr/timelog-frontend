import axios from 'axios';
import { JWT_LOCAL_STORAGE_KEY, SERVER_URL } from '../constants';
import { attachJwtToken } from './interceptors';
import type { IUser } from './interfaces';

const baseURL = `${SERVER_URL}/auth`;

const openFetch = axios.create({ baseURL });
const authFetch = axios.create({ baseURL });
authFetch.interceptors.request.use(attachJwtToken);

export type LoginReq = Pick<IUser, 'email'> & { password: string };
export type LoginRes = { accessToken: string };
export async function login(body: LoginReq): Promise<void> {
    const res = await openFetch.post<LoginRes>('/login', body);
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, res.data.accessToken);
}

export function logout(): void {
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
}

export type RegisterReq = Pick<IUser, 'email'> & { password: string };
export type RegisterRes = Pick<IUser, 'id' | 'email'>;
export async function register(body: RegisterReq): Promise<RegisterRes> {
    const res = await openFetch.post<RegisterRes>('/register', body);
    return res.data;
}

export type MeRes = Pick<IUser, 'id' | 'email' | 'profile'>;
export async function me(): Promise<MeRes> {
    const res = await authFetch.get<MeRes>('/me');
    const data = res.data;
    data.profile = data.profile ?? undefined;
    return data;
}
