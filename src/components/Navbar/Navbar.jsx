import React, { useState, useEffect, useRef,useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { LiaMusicSolid } from "react-icons/lia";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from '../../assets/images/logo.png';
import AuthModal from "../Authentication/AuthModal";
import Dropdown from "./Dropdown";
import { useUser } from "../../utils/UserProvider";
import { PROJECT_ID } from '../../utils/constant';
import { debounce } from 'lodash';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const { userName, isUserLoggedIn, setSearchData } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        setShowNavbar(location.pathname !== '/subscription');
    }, [location]);

    useEffect(() => {
        setSearchQuery('');
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubscriptionClick = () => {
        if (isUserLoggedIn) navigate('/subscription');
        else setShowLogin(true);
    };

    const handleMyMusicClick = () => {
        if (isUserLoggedIn) navigate('/mymusic');
        else setShowLogin(true);
    };

    const handleSearch = () => {
        navigate(`/search`);
    };

    const handleKeyPress = useCallback(debounce(async (event) => {
        if (event.key === 'Enter') {
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchQuery}"}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': PROJECT_ID
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setSearchData(data.data);
                } else {
                    throw new Error('Failed to fetch search results');
                }
            } catch (error) {
                toast.error('Failed to fetch search results. Please try again later.');
            }
        }
    }, 300), [searchQuery, setSearchData]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            handleKeyPress(event);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyPress]);

    return (
        <div className={`${showNavbar ? 'block' : 'hidden'}`}>
            <nav className='h-[70px] w-full bg-[#1A1A1A] lg:px-24 md:px-10 sm:px-5 xs:px-3 grid grid-cols-2 md:grid-cols-[30%,70%] lg:grid-cols-3 gap-2'>
                <Link to="/" className='flex items-center gap-2'>
                    <img src={logo} className='lg:h-12 h-10 lg:w-12 w-10 rounded-full' alt="Logo" />
                    <h3 className='lg:text-xl text-lg text-white'>Wynk Music</h3>
                </Link>
                <div className='lg:flex lg:col-span-2 items-center justify-end px-1 hidden md:flex'>
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] lg:shadow-[#2A2A2A] h-9 lg:h-10 w-60 lg:w-72 rounded-full px-4 lg:px-6 gap-2 lg:gap-3'>
                        <div className='flex gap-3' onClick={handleSearch}>
                            <CiSearch className='text-slate-200 font-medium h-5 lg:h-7 w-5 lg:w-7 cursor-pointer' />
                            <input
                                type='search'
                                id='searchInput'
                                placeholder='Search Songs'
                                className='bg-transparent focus:outline-none text-white font-light text-base lg:text-lg lg:w-48'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 lg:gap-3 ml-4'>
                        <div className="hover:opacity-60 cursor-pointer flex items-center" onClick={handleSubscriptionClick}>
                            <BsCurrencyRupee className='h-5 lg:h-6 w-5 lg:w-6 pt-[2px] text-white gap-2' />
                            <div className="text-white hidden md:block lg:text-lg text-base font-light">Manage Subscription</div>
                        </div>
                        {isUserLoggedIn ? (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10 hidden lg:flex' />
                                <button className='hover:opacity-60 cursor-pointer text-white items-center h-8 lg:h-10 gap-2 hidden lg:flex' onClick={handleMyMusicClick}>
                                    <LiaMusicSolid className='h-4 lg:h-5 w-4 lg:w-5' />
                                    <div className="text-white hidden lg:block lg:text-lg font-light">My music</div>
                                </button>
                            </>
                        ) : (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10 hidden lg:flex' />
                                <button className='hover:opacity-60 cursor-pointer text-white items-center h-8 lg:h-10 gap-2 hidden lg:flex' onClick={() => setShowLogin(true)}>
                                    <FaRegUser className='h-4 lg:h-5 w-4 lg:w-5' />
                                    <div className="text-white hidden lg:block lg:text-lg font-light">Login</div>
                                </button>
                            </>
                        )}
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            <IoMenu className='text-white ml-3 lg:ml-5 h-6 lg:h-7 w-6 lg:w-7' />
                        </button>
                    </div>
                </div>
                {/* For Small Screen */}
                <div className='w-full flex items-center justify-end pl-5 gap-3 lg:hidden md:hidden'>
                    <button onClick={handleSearch}><CiSearch className='text-white h-6 w-6' /></button>
                    <button onClick={() => setShowDropdown(!showDropdown)}><IoMenu className='text-white h-6 w-6' /></button>
                </div>
            </nav>
            {showDropdown && (
                <div ref={dropdownRef}>
                    <Dropdown userName={userName} />
                </div>
            )}
            <ToastContainer />
            <AuthModal showLogin={showLogin} handleClose={() => setShowLogin(false)} navigate={navigate} />
        </div>
    );};

export default Navbar;
