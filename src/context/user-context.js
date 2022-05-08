import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUserName] = useState('');
  const [userId, setUserID] = useState('');
  return (
    <UserContext.Provider value={{ username, setUserName, userId, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};
const UseUser = () => useContext(UserContext);

export { UseUser, UserProvider };
