import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
