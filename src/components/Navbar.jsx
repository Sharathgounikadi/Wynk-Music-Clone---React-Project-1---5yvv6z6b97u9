import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { Box, Modal, Typography } from '@mui/material';
import loginImg from "../assets/images/loginImg.png"
import asImg from "../assets/images/AppStore.png"
import psImg from "../assets/images/PlayStore.png"
import axios from 'axios';
import { APP_TYPE, PROJECT_ID, LOGIN_API, SIGNUP_API } from '../constant';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backDrop: {
        backdropFilter: "blur(3px)",
        backgroundColor: 'rgba(0,0,30,0.4)'
    },
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")

    const [isLogin, setIsLogin] = useState(true)

    const handleSubmit = async (args) => {
        if (args === "login") {
            const requestData = {
                email: email,
                password: pass,
                appType: APP_TYPE,
            };
            await axios.post(LOGIN_API, requestData, {
                headers: {
                    projectId: PROJECT_ID,
                },
            }).then((res) => {
                console.log(res.status);
            }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("Sign Up Function");
        }
    }

    return (
        <>
            <nav className='h-[70px] w-full bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='flex items-center px-[100px] gap-2'>
                    <img src={logo} className='h-12 w-12 rounded-full' />
                    <h3 className='text-xl text-white'>Wynk Music</h3>
                </div>
                <div className=' flex col-span-2  items-center justify-end pr-16' >
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] h-10 w-72 rounded-full px-8 gap-3'>
                        <CiSearch className='text-slate-200 h-7 w-7' />
                        <input type='text' placeholder='Search Songs' className='bg-transparent focus:outline-none text-slate-400' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='text-white flex items-center pl-8 h-12  gap-1 text-lg'>
                            <BsCurrencyRupee className='h-6 w-6' />
                            Manage Subscription
                        </button>
                        <RxDividerVertical className='text-white h-10 w-10' />
                        <button className='text-white flex items-center h-12 gap-1' onClick={handleOpen}>
                            <FaRegUser className='h-5 w-5' />
                            Login
                        </button>
                        <IoMenu className='text-white ml-5 h-8 w-8' />
                    </div>
                </div>
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Credential Modal"
                style={{ backdropFilter: "blur(5px)" }}
            >
                <div className="h-[450px] w-[750px] grid grid-cols-5 bg-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
                    <div className='col-span-2'>
                        <img src={loginImg} alt='Login?SignUpImage' className='h-[450px] w-full rounded-tl-xl rounded-bl-xl' />
                    </div>
                    <div className='col-span-3 p-5 flex flex-col items-center justify-around'>
                        <h1 className='text-white text-3xl w-full'>{isLogin ? 'Login' : 'Sign Up'}</h1>
                        <p className='text-white'>Get a personalised experience, and access all your music</p>

                        {isLogin ? <></> : (<input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />)}
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />
                        <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />
                        <div className='flex items-center gap-3'>
                            <button className='bg-white h-10 w-40 rounded-md' onClick={() => handleSubmit(isLogin ? 'login' : 'signup')}>{isLogin ? 'Login' : 'Sign Up'}</button>
                            <button className='bg-white h-10 w-40 rounded-md' onClick={() => setIsLogin(!isLogin)}>{!isLogin ? 'Login' : 'Sign Up'}</button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='text-white text-sm'>Available on</p>
                            <img src={asImg} alt='as' className='h-14 w-32' />
                            <img src={psImg} alt='ps' className='h-14 w-32' />
                        </div>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default Navbar