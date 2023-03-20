import { createContext, useEffect, useState, type ReactNode } from 'react';
import { auth } from '../api';

export type AuthState = {
    loading: boolean;
    user?: auth.MeRes;
    reload: VoidFunction;
};

const initialValue: AuthState = {
    loading: true,
    user: undefined,
    reload: () => {},
};
export const AuthContext = createContext(initialValue);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<auth.MeRes>();
    const [isLoading, setIsLoading] = useState(true);
    const [reloadFlag, setReloadFlag] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                setUser(await auth.me());
            } catch (err: any) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [reloadFlag]);

    return (
        <AuthContext.Provider
            value={{
                loading: isLoading,
                user,
                reload: () => setReloadFlag(!reloadFlag),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
