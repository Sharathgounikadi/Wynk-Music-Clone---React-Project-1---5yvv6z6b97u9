import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Guest');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn') === 'true');
  const [currentSong, setCurrentSong] = useState(null);
  const [searchData, setSearchData] = useState([]);
  // const navigate= useNavigate();

  useEffect(() => {
    setUserName(localStorage.getItem('userName') || 'Guest');
    setIsUserLoggedIn(localStorage.getItem('isUserLoggedIn') === 'true');
  }, []);

  const loginSignupContext = (userName, token) => {
    setUserName(userName);
    setIsUserLoggedIn(true);
    localStorage.setItem('userName', userName);
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('token', token);
  };

  const signOutContext = () => {
    setUserName('Guest');
    setIsUserLoggedIn(false);
    localStorage.setItem('userName', 'Guest');
    localStorage.setItem('isUserLoggedIn', 'false');
    localStorage.removeItem('token');
    // navigate('/')
    window.location.reload();
  };

  const value = {
    userName,loginSignupContext,signOutContext,isUserLoggedIn,setCurrentSong,
    currentSong,searchData,setSearchData};

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}