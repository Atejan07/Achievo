import React, { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
