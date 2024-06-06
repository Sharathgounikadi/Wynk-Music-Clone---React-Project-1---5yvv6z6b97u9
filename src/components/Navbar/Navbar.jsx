import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { LiaMusicSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
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
    const { userName, isUserLoggedIn } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);
    const { setsearchData } = useUser();
    useEffect(() => {
        setShowNavbar(location.pathname !== '/subscription');
    }, [location, isUserLoggedIn]);
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
    const handleKeyPress = debounce(async (event) => {
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
                    setsearchData(data.data);
                } else {
                    throw new Error('Failed to fetch search results');
                }
            } catch (error) {
                toast.error('Failed to fetch search results. Please try again later.');
            }
        }
    }, 300);
    return (
        <div className={`${showNavbar ? 'block' : 'hidden'}`}>
            <nav className='h-[70px] w-full bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <Link to="/" className='flex items-center px-[10px] lg:px-[100px] gap-2'>
                    <img src={logo} className='h-10 w-10 rounded-full' alt="Logo" />
                    <h3 className='text-lg lg:text-xl text-white'>Wynk Music</h3>
                </Link>
                <div className='lg:flex lg:col-span-2 items-center justify-end pr-4 lg:pr-16'>
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] lg:shadow-[#2A2A2A] h-8 lg:h-10 w-52 lg:w-72 rounded-full px-4 lg:px-8 gap-2 lg:gap-3'>
                        <div className='flex gap-2 lg:gap-5' onClick={handleSearch}>
                            <CiSearch className='text-slate-200 h-5 lg:h-7 w-5 lg:w-7 cursor-pointer' />
                            <input
                                type='search'
                                id='searchInput'
                                placeholder='Search Songs'
                                className='bg-transparent focus:outline-none text-white font-light text-base w-full lg:text-lg lg:w-50'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 lg:gap-3 ml-4'>
                        <span className="hover:opacity-60 cursor-pointer flex" onClick={handleSubscriptionClick}>
                            <span className="text-white hidden lg:block">
                                <BsCurrencyRupee className='h-4 lg:h-6 w-4 lg:w-6' />
                            </span>
                            <div className="text-white hidden lg:block ml-2 font-light">Manage Subscription</div>
                        </span>
                        {isUserLoggedIn ? (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                                <button className='hover:opacity-60 cursor-pointer text-white flex items-center h-8 lg:h-10 gap-1' onClick={handleMyMusicClick}>
                                    <LiaMusicSolid className='h-4 lg:h-5 w-4 lg:w-5' />
                                    <div className="text-white hidden lg:block ml-2 font-light">My music</div>
                                </button>
                            </>
                        ) : (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                                <button className='hover:opacity-60 cursor-pointer text-white flex items-center h-8 lg:h-10 gap-1' onClick={() => setShowLogin(true)}>
                                    <FaRegUser className='h-4 lg:h-5 w-4 lg:w-5' />
                                    <div className="text-white hidden lg:block ml-2 font-light">Login</div>
                                </button>
                            </>
                        )}
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            <IoMenu className='text-white ml-3 lg:ml-5 h-6 lg:h-8 w-6 lg:w-8' />
                        </button>
                    </div>
                </div>
            </nav>
            {showDropdown && (
                <div ref={dropdownRef}>
                    <Dropdown userName={userName} />
                </div>
            )}
            <AuthModal showLogin={showLogin} handleClose={() => setShowLogin(false)} navigate={navigate} />
            <ToastContainer />
        </div>

    );
};
export default Navbar;