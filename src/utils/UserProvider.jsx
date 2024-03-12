import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn') === 'true');

  const loginSignupContext = (userName, token) => {
    setUserName(userName);
    setIsUserLoggedIn(true)
    localStorage.setItem('userName', userName);
    localStorage.setItem('isUserLoggedIn', true);
    localStorage.setItem('token', token);
    console.log("User signed in:", userName);
  };

  const signOutContext = () => {
    setUserName('Welcome to Wynk');
    setIsUserLoggedIn(false)
    localStorage.setItem('userName', 'Welcome to Wynk');
    localStorage.setItem('isUserLoggedIn', false);
    localStorage.setItem('token', '');
    console.log("User signed out");
  };




  const value = { userName, loginSignupContext, signOutContext, isUserLoggedIn };

  return (
    <UserContext.Provider value={value}>{
      children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
