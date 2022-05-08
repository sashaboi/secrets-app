import { createContext, useContext, useState } from 'react';
const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alertstatus, setalertstatus] = useState(false);
  const [alertmessage, setalertmessage] = useState('Sample Alert message');
  const showalert = messageforalert => {
    setalertmessage(messageforalert);
    setalertstatus(true);
    setTimeout(() => {
      setalertstatus(false);
    }, 1500);
  };
  return (
    <AlertContext.Provider
      value={{
        alertmessage,
        showalert,
        setalertmessage,
        alertstatus,
        setalertstatus,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

const UseAlert = () => useContext(AlertContext);
export { UseAlert, AlertProvider };
