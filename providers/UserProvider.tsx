'use client';

import { MyUSerContextProvider } from '@/hooks/useUser';

interface UserProviderProps {
   children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
   return <MyUSerContextProvider>{children}</MyUSerContextProvider>;
};
export default UserProvider;
