import { User } from "@models/index";
import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isUserLogged: boolean;
  handleUserLogged: () => void;
  handleUserUnlogged: () => void;
  userInfo: {
    name: string;
    email: string;
    password: string;
  };
  handleUpdateUserInfo: (newUserInfo: User) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<User>({
    name: "fulano",
    email: "fulano@gmail.com",
    password: "12345678",
  });

  function handleUserLogged() {
    setIsUserLogged(true);
  }

  function handleUserUnlogged() {
    setIsUserLogged(false);
  }

  function handleUpdateUserInfo(newUserInfo: User) {
    setUserInfo(newUserInfo);
  }

  return (
    <UserContext.Provider
      value={{
        isUserLogged,
        handleUserLogged,
        handleUserUnlogged,
        userInfo,
        handleUpdateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
