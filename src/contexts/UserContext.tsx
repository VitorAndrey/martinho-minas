import { ReactNode, createContext, useState } from "react";

import { User } from "@models/index";

type UserContextType = {
  isUserLogged: boolean;
  handleUserLogged: () => void;
  handleUserUnlogged: () => void;
  userInfo: User;
  handleUpdateUserInfo: (newUserInfo: User) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<User>({
    id: "123",
    name: "seu nome",
    email: "exemplo@gmail.com",
    password: "12345678",
    phoneNumber: "(00) 00000-0000",
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
