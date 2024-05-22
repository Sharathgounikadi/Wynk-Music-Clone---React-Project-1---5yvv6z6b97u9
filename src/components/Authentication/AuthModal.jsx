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
const AuthModal = ({ showLogin, handleClose, navigate }) => {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getName, setName] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const { loginSignupContext } = useUser();
    const handleSubmit = async () => {
        try {
            let response;
            if (isLogin) {
                response = await axios.post(LOGIN_API, {
                    email: getEmail,
                    password: getPassword,
                    appType: APP_TYPE,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': PROJECT_ID,
                    },
                });
                toast.success('Login successful!', { autoClose: 2000 });
            } else {
                response = await axios.post(SIGNUP_API, {
                    email: getEmail,
                    password: getPassword,
                    appType: APP_TYPE,
                    name: getName,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': PROJECT_ID,
                    },
                });
                toast.success('Signup successful!', { autoClose: 2000 });
            }
            const token = response.data.token;
            const responseData = response.data.data;
            const userName = isLogin ? responseData.getName : getName;
            loginSignupContext(userName, token);
            handleClose();
            navigate('/');
        } catch (error) {
            toast.error('Wrong Credentials. Please try again.', { autoClose: 2000 });
        }
    };
    return (
        <Modal
            open={showLogin}
            onClose={handleClose}
            aria-labelledby="Credential Modal"
            style={{ backdropFilter: "blur(5px)" }}
        >
            <div className="h-[450px] w-[320px] lg:w-[750px] grid grid-cols-1 lg:grid-cols-5 bg-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
                <div className='lg:col-span-2'>
                    <img src={loginImg} alt='Login?SignUpImage' className='h-[450px] w-full lg:rounded-tl-xl lg:rounded-bl-xl' />
                </div>
                <div className='lg:col-span-3 p-5 flex flex-col items-center justify-around'>
                    <h1 className='text-white text-3xl w-full'>{isLogin ? 'Login' : 'Sign Up'}</h1>
                    <p className='text-white text-sm lg:text-base'>Get a personalized experience and access all your music</p>
                    {!isLogin && <input type='text' placeholder='Username' value={getName} onChange={(e) => setName(e.target.value)} className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full' />}
                    <input type='getEmail' placeholder='Email' value={getEmail} onChange={(e) => setEmail(e.target.value)} className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full' />
                    <input type='getPassword' placeholder='Password' value={getPassword} onChange={(e) => setPassword(e.target.value)} className='text-white bg-[#1B1B1C] focus:outline-none px-2 h-10 rounded-md w-full' />
                    <div className='flex items-center gap-2'>
                        <button className='bg-white h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base' onClick={handleSubmit}>{isLogin ? 'Login' : 'Sign Up'}</button>
                        <button className='bg-white h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base' onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign Up' : 'Login'}</button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-white text-xs lg:text-sm'>Available on</p>
                        <img src={asImg} alt='as' className='h-10 lg:h-14 w-24 lg:w-32' />
                        <img src={psImg} alt='ps' className='h-10 lg:h-14 w-24 lg:w-32' />
                    </div>
                </div>
            </div>
        </Modal>
    );
};
export default AuthModal;