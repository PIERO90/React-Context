import { createContext, useEffect, useState } from "react";

export const FollowContext = createContext();

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const FetchUsers = async () => {
    const usersJson = await fetch("/usuarios.json");
    const { usuarios } = await usersJson.json();
    const usersData = usuarios.map((user) => {
      return {
        ...user,
        following: false,
      };
    });

    setUsers(usersData);
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return <FollowContext.Provider value={{ users, setUsers }}>{children}</FollowContext.Provider>;
};
