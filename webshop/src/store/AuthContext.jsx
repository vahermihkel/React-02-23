import React, { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };