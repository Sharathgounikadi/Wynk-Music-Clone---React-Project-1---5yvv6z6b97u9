import React, { createContext, useState, useContext } from "react";

// Create a context for user information
const UserContext = createContext();

// Provider component to wrap around the app and provide user context
export const UserProvider = ({ children }) => {
  // State to manage user information and status
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Welcome to Wynk');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn') === 'true');
  const [currentSong, setCurrentSong] = useState(null);
  const [searchData, setSearchData] = useState([]);

  // Function to handle user login/signup
  const loginSignupContext = (userName, token) => {
    setUserName(userName);
    setIsUserLoggedIn(true);
    localStorage.setItem('userName', userName);
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('token', token);
    console.log("User signed in:", userName);
  };

  // Function to handle user logout
  const signOutContext = () => {
    setUserName('Welcome to Wynk');
    setIsUserLoggedIn(false);
    localStorage.setItem('userName', 'Welcome to Wynk');
    localStorage.setItem('isUserLoggedIn', 'false');
    localStorage.setItem('token', '');
    console.log("User signed out");
  };

  // Context value to be provided to consuming components
  const value = { 
    userName, 
    loginSignupContext, 
    signOutContext, 
    isUserLoggedIn, 
    setCurrentSong, 
    currentSong, 
    searchData, 
    setSearchData 
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
