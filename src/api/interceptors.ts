import { type InternalAxiosRequestConfig as RequestConfig } from 'axios';
import { JWT_LOCAL_STORAGE_KEY } from '../constants';

export function attachJwtToken(config: RequestConfig): RequestConfig {
    const jwtToken = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
    if (!jwtToken) {
        return {
            ...config,
            signal: AbortSignal.abort('Request Failed: no jwt token'),
        };
    }

    config.headers.Authorization = `Bearer ${jwtToken}`;
    return { ...config };
}
