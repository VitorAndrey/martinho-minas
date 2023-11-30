import { ReactNode, createContext, useState } from "react";

import { User } from "@models/index";

type UserContextType = {
  isUserLogged: boolean;
  handleUserLogged: () => void;
  handleUserUnlogged: () => void;
  userInfo: User | null;
  handleUpdateUserInfo: (newUserInfo: User | null) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User | null>({
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

  function handleUpdateUserInfo(newUserInfo: User | null) {
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
