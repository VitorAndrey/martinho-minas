import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isUserLogged: boolean;
  handleUserLogged: () => void;
  handleUserUnlogged: () => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  function handleUserLogged() {
    setIsUserLogged(true);
  }

  function handleUserUnlogged() {
    setIsUserLogged(false);
  }

  return (
    <UserContext.Provider
      value={{ isUserLogged, handleUserLogged, handleUserUnlogged }}
    >
      {children}
    </UserContext.Provider>
  );
}
