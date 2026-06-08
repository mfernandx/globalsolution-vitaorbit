import { createContext, ReactNode, useContext, useState } from 'react';
import { LoginResponse } from '../model/User';

type AuthContextData = {
    loggedUser: LoginResponse | null;
    signIn: (user: LoginResponse) => void;
    signOut: () => void;
};

type AuthProviderProps = {children: ReactNode};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  
    const [loggedUser, setLoggedUser] = useState<LoginResponse | null>(null);

    function signIn(user: LoginResponse) {
        setLoggedUser(user);
    }

    function signOut() {
        setLoggedUser(null);
    }

    return (
        <AuthContext.Provider value={{ loggedUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}