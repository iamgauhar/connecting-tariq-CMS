import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [VerifyEmail, setVerifyEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        VerifyEmail,
        setVerifyEmail,
        newPassword,
        setNewPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => useContext(LoginContext);

export { LoginContext, LoginContextProvider, useLoginContext };
