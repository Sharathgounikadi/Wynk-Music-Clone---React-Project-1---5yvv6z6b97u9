import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from "../../assets/images/loginImg.png";
import asImg from "../../assets/images/AppStore.png";
import psImg from '../../assets/images/PlayStore.png';
import { APP_TYPE, PROJECT_ID, LOGIN_API, SIGNUP_API } from '../../utils/constant';
import { useUser } from '../../utils/UserProvider';
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const AuthModal = ({ showLogin, handleClose, navigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const { loginSignupContext } = useUser();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            toast.error('Invalid email format', { autoClose: 1000 });
            return;
        }

        try {
            let response;
            if (isLogin) {
                response = await axios.post(LOGIN_API, {
                    email,
                    password,
                    appType: APP_TYPE,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': PROJECT_ID,
                    },
                });
                toast.success('Login successful!', { autoClose: 1000 });
            } else {
                response = await axios.post(SIGNUP_API, {
                    email,
                    password,
                    appType: APP_TYPE,
                    name,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': PROJECT_ID,
                    },
                });
                toast.success('Signup successful!', { autoClose: 1000 });
            }

            const token = response.data.token;
            const responseData = response.data.data;
            const userName = isLogin ? responseData.name : name;

            loginSignupContext(userName, token);

            handleClose();
            navigate('/');
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (isLogin) {
                    toast.error(errorMessage || 'Login failed. Please try again.', { autoClose: 1000 });
                } else {
                    toast.error(errorMessage || 'Signup failed. Please try again.', { autoClose: 1000 });
                }
            } else {
                toast.error('An error occurred. Please try again.', { autoClose: 1000 });
            }
        }
    };

    const handleModalClose = () => {
        handleClose();
        setIsLogin(true); // Reset to show login button and the "Don't have an account?" message when the modal is reopened
    };

    return (
        <Modal
            open={showLogin}
            onClose={handleModalClose}
            aria-labelledby="Credential Modal"
            style={{ backdropFilter: "blur(5px)" }}
        >
            <div className="h-[450px] w-[320px] lg:w-[750px] grid grid-cols-1 lg:grid-cols-5 bg-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
                <button onClick={handleModalClose} className="absolute top-2 right-2 text-white text-2xl">
                    <AiOutlineClose />
                </button>
                <div className='lg:col-span-2'>
                    <img src={loginImg} alt='Login/SignUp Image' className='h-[450px] w-full lg:rounded-tl-xl lg:rounded-bl-xl' />
                </div>
                <div className='lg:col-span-3 p-5 flex flex-col items-center justify-around'>
                    <h1 className='text-white text-3xl w-full'>{isLogin ? 'Login' : 'Sign Up'}</h1>
                    <p className='text-white text-sm lg:text-base'>Get a personalized experience and access all your music</p>
                    {!isLogin &&
                        <input
                            type='text'
                            placeholder='Username'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full'
                        />
                    }
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full'
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full pr-10'
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button
                            className='bg-green-500 h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base hover:bg-green-600'
                            onClick={handleSubmit}
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </div>
                    {isLogin ? (
                        <p className='text-white text-xs lg:text-sm mt-4'>
                            Don't have an account?{' '}
                            <button
                                className='text-blue-500 hover:underline'
                                onClick={() => setIsLogin(false)}
                            >
                                Sign Up
                            </button>
                        </p>
                    ) : (
                        <p className='text-white text-xs lg:text-sm mt-4'>
                            Already have an account?{' '}
                            <button
                                className='text-blue-500 hover:underline'
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                        </p>
                    )}
                    <div className='flex items-center justify-center'>
                        <p className='text-white text-xs lg:text-sm'>Available on</p>
                        <img src={asImg} alt='App Store' className='h-10 lg:h-14 w-24 lg:w-32' />
                        <img src={psImg} alt='Play Store' className='h-10 lg:h-14 w-24 lg:w-32' />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AuthModal;
