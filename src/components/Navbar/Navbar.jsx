import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { ToastContainer } from 'react-toastify';
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import LoginModal from "../Authentication/LoginSignupModal";
import Dropdown from "./Dropdown";
import { useUser } from "../../utils/UserProvider";
import { MyLibrary } from "../../pages/MyLibrary";

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [shownavbar, setshownavbar] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { userName, isUserLoggedIn } = useUser();

    const handleShowLogin = () => setShowLogin(true);
    const handleClose = () => setShowLogin(false);
    const ToggleDropdown = () => setShowDropdown(!showDropdown);

    useEffect(() => {
        if (location.pathname === '/subscription') {
            setshownavbar(false);
        } else {
            setshownavbar(true);
        }
    }, [location, isUserLoggedIn]);

    const handleSubscriptionClick = () => {
        if (isUserLoggedIn) navigate('/subscription');
        else setShowLogin(true);
    };

    return (
        <div className={`${shownavbar ? 'block' : 'hidden'}`}>
            <nav className='h-[70px] w-full bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <a href="/" className='flex items-center px-[10px] lg:px-[100px] gap-2'>
                    <img src={logo} className='h-10 w-10 rounded-full' alt="Logo" />
                    <h3 className='text-lg lg:text-xl text-white'>Wynk Music</h3>
                </a>
                <div className='lg:flex lg:col-span-2  items-center justify-end pr-4 lg:pr-16' >
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] lg:shadow-[#2A2A2A] h-8 lg:h-10 w-52 lg:w-72 rounded-full px-4 lg:px-8 gap-2 lg:gap-3'>
                        <CiSearch className='text-slate-200 h-5 lg:h-7 w-5 lg:w-7' />
                        <input type='text' placeholder='Search Songs' className='bg-transparent focus:outline-none text-slate-400 text-xs lg:text-sm lg:w-40' />
                    </div>
                    <div className='flex items-center justify-center gap-2 lg:gap-3 ml-4'>
                        <button className='text-white flex items-center h-8 lg:h-10 gap-1 text-xs lg:text-base' onClick={handleSubscriptionClick}>
                            <BsCurrencyRupee className='h-4 lg:h-6 w-4 lg:w-6' />
                            Manage Subscription
                        </button>
                        {isUserLoggedIn === true ? (
                            <MyLibrary />
                        ) : (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                                <button className='text-white flex items-center h-8 lg:h-10 gap-1' onClick={handleShowLogin}>
                                    <FaRegUser className='h-4 lg:h-5 w-4 lg:w-5' />
                                    Login
                                </button>
                            </>
                        )}
                        <button onClick={ToggleDropdown}>
                            <IoMenu className='text-white ml-3 lg:ml-5 h-6 lg:h-8 w-6 lg:w-8' />
                        </button>
                    </div>
                </div>
            </nav>
            {showDropdown && <Dropdown userName={userName} />}
            <LoginModal showLogin={showLogin} handleClose={handleClose} navigate={navigate} />
            <ToastContainer />
        </div>
    );
};

export default Navbar;
