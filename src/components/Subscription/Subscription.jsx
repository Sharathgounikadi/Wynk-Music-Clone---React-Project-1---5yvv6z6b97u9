import React, { useEffect } from 'react';
import { useUser } from '../../utils/UserProvider';
import { useNavigate } from 'react-router-dom';
import { LuCrown, LuDot } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowBack } from 'react-icons/io'; // Importing back arrow icon

const Subscription = () => {
    const { isUserLoggedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/')
        }
    }, [isUserLoggedIn])

    const underDevelopment = () => {
        toast("Feature under Development");
    }

    const goToHomePage = () => {
        navigate('/');
    }

    return (
        <div>
            <ToastContainer/>
            {/* <Navbar/> */}
            <div className="w-full h-[230px] bg-[#1f272b] box-border flex relative justify-center" style={{ clipPath: 'ellipse(100% 75% at 50% 15%)' }}>
                <img className="w-[14%] -mt-32 " alt="logo" src="https://pay.wynk.in/static/media/Wynklogo-white.97aea089.svg" />
            </div>
            <div className="flex justify-center relative items-center -mt-28 z-20">
                <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
                    <div className='flex text-xl justify-center text-red-500'>
                        <h2>Go Premium</h2>
                        <LuCrown className='mt-2 ml-2' />
                    </div>
                    <p className="text-center text-gray-400 mb-6">Get the best of music & podcasts</p>
                    <div className="text-white  mb-4">
                        <div className="grid grid-cols-3 space-x-40 mb-2">
                            <span>Benefits</span>
                            <span className="text-red-500">Now</span>
                            <span className="text-red-500">Premium</span>
                        </div>
                        <div className="grid grid-cols-3 space-x-40 mb-2">
                            <span>Unlimited Streaming</span>
                            <span>✔️</span>
                            <span>✔️</span>
                        </div>
                        <div className="grid grid-cols-3 space-x-40 mb-2">
                            <span>Unlimited Downloads</span>
                            <span>✔️</span>
                            <span>✔️</span>
                        </div>
                        <div className="grid grid-cols-3 space-x-40 mb-2">
                            <span>Ad free Music</span>
                            <span>❌</span>
                            <span>✔️</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 mt-10">
                        <div className="relative w-32 h-32 rounded-xl bg-gray-800 text-white shadow-lg flex flex-col justify-center items-center">
                            <div className="absolute top-1 right-1 bg-red-500 rounded-full w-8 h-8 flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-sm font-bold mt-4 mb-4">Yearly</h2>
                            <div className="flex items-baseline mb-4">
                                <span className="text-gray-400 text-xs font-bold line-through">₹999</span>
                                <span className="text-sm font-bold ml-2">₹399</span>
                            </div>
                            <p className="text-xs items-center mb-2 text-gray-400">Save 60%</p>
                            <button className="bg-red-500 text-sm hover:bg-red-600 text-white font-thin p-1 rounded-md">
                                BEST VALUE
                            </button>
                        </div>

                        <div className="relative  w-32 h-32 rounded-xl bg-gray-800 text-white p-6 shadow-lg flex flex-col justify-center items-center">
                            <h2 className="text-sm font-bold mb-4">3 Months</h2>
                            <div className="flex items-baseline mb-4">
                                <span className="text-gray-400 text-xs font-bold line-through">₹289</span>
                                <span className="text-sm font-bold ml-2 ">₹129</span>
                            </div>
                            <p className="text-xs text-gray-400">Save 55%</p>
                        </div>

                        <div className="relative  w-32 h-32 rounded-xl bg-gray-800 text-white shadow-lg flex flex-col justify-center items-center">
                            <h2 className="text-sm font-bold mb-4">Monthly</h2>
                            <div className="flex items-baseline mb-4">
                                <span className="text-gray-400 text-xs font-bold line-through">₹99</span>
                                <span className="text-sm font-bold ml-2">₹49</span>
                            </div>
                            <p className="text-xs text-gray-400">Save 50%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-64 my-5'>
                <span className='flex'>
                    <LuDot className='h-5 text-slate-50' />
                    <p className="text-gray-400">All amounts are inclusive of 18% GST.</p>
                </span>
                <span className='flex'>
                    <LuDot className='h-5 text-slate-50' />
                    <p className="text-gray-400 ">By clicking on Continue button, you agree to Wynk's Terms of service and Privacy policy.</p>
                </span>
            </div>
            <div className="bg-gray-800 rounded-lg mx-64 flex-row p-2 items-center max-w-5xl">
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <h2 className="text-white text-sm font-bold">Amount to be paid</h2>
                        <p className="text-gray-400 text-sm font-medium">₹399</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={underDevelopment}>
                        Continue
                    </button>
                </div>
            </div>
            {/* Back arrow button */}      
            <button className="absolute top-0 left-0 m-4 text-white text-lg p-2 bg-red-400 rounded-full" onClick={goToHomePage}>Go back to Home
                {/* Using IoIosArrowBack from react-icons */}
                {/* <IoIosArrowBack />  */}
            </button>
        </div>
    )
}

export default Subscription;
