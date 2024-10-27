'use client';
import { createContext, ReactNode, useState } from 'react';
import { UserType, UserContextProps, FirebaseAccount, LoginStatus } from '@/types/types'

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [firebaseAccount, setFirebaseAccount] = useState<FirebaseAccount | null>(null);
  const [loginStatus, setLoginStatus] = useState(LoginStatus.Unknown);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        firebaseAccount,
        setFirebaseAccount,
        loginStatus,
        setLoginStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
