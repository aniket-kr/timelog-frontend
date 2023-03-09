import { createContext } from 'react';

export const AuthContext = createContext({
    loading: true,
    user: null,
    reloadUser: () => {},
});

export default AuthProvider = ({ children }) => {
    return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};
