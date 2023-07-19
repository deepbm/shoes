import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, uid: user && user.uid, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
