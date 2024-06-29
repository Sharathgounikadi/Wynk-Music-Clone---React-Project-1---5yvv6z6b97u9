import React, { useState } from 'react';
import { useUser } from '../../utils/UserProvider';
// import { ToastContainer } from 'react-toastify';
import DownloadModal from './DownloadModal';
import UnderMaintenance from '../Common/UnderMaintenance'
import AuthModal from '../Authentication/AuthModal';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsTranslate, BsCurrencyRupee } from "react-icons/bs";
import { PiSpeakerHighBold } from "react-icons/pi";
import { FaPodcast, FaRegUser, FaSignOutAlt } from "react-icons/fa";

const Dropdown = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { userName, signOutContext, isUserLoggedIn } = useUser();
    const [showDropdown, setShowDropdown] = useState(true);
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const navigate = useNavigate();

    const handleSubscriptionClick = () => {
        if (isUserLoggedIn) navigate('/subscription');
        else setShowLogin(true);
    };

    const handleDownload = () => {
        setShowDownloadModal(true);
        setShowDropdown(false);
    };

    const handleCloseModal = () => {
        setShowDownloadModal(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setShowDropdown(false);
    };

    return (
        <div>
            {showDropdown && (
                <div className="relative h-full flex items-center text-white bg-[#1C1B1B]">
                    <div className="bg-[#1C1B1B] z-30 absolute top-full lg:mr-12 mt-2 w-64 h-fit right-0 pt-5 rounded-xl stroke-2 shadow-popover transform opacity-100 scale-100">
                        <div className="flex items-center gap-3 hover:opacity-60 mb-5 px-4">
                            <FaRegUser className="h-5 w-5" />
                            <span className="font-light opacity-80">{userName || "Guest"}</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4 lg:hidden md:hidden sm:hidden" onClick={handleSubscriptionClick}>
                            <BsCurrencyRupee className="h-6 w-6" />
                            <span className="font-light opacity-80">Manage Subscription</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handleDownload}>
                            <MdOutlineDownloadForOffline className="h-6 w-6" />
                            <span className="font-light opacity-80">Download App</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/selectlanguage')}>
                            <BsTranslate className="h-5 w-5" />
                            <span className="font-light opacity-80">Select Language</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/selectsound')}>
                            <PiSpeakerHighBold className="h-5 w-5" />
                            <span className="font-light opacity-80">Sound Quality</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/podcast')}>
                            <FaPodcast className="h-5 w-5" />
                            <span className="font-light opacity-80">Podcast</span>
                        </div>
                        {isUserLoggedIn && (
                            <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={signOutContext}>
                                <FaSignOutAlt className="h-5 w-5" />
                                <span className="font-light opacity-80">Sign Out</span>
                            </div>
                        )}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3 stroke-2 hover:opacity-60 cursor-pointer mb-5 border-t border-[#2F3031] pt-5 px-4 relative"
                            href="https://studio.wynk.in"
                            onClick={() => setShowDropdown(false)}
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.1429 3.35357L12.1428 3.35357C11.3654 3.35441 10.6201 3.66359 10.0704 4.21328C9.52073 4.76296 9.21155 5.50826 9.21071 6.28564V6.28572C9.21071 6.86564 9.38268 7.43254 9.70487 7.91473C10.0271 8.39691 10.485 8.77274 11.0208 8.99466C11.5566 9.21659 12.1461 9.27466 12.7149 9.16152C13.2837 9.04838 13.8061 8.76912 14.2162 8.35905C14.6263 7.94899 14.9055 7.42653 15.0187 6.85775C15.1318 6.28897 15.0737 5.69941 14.8518 5.16363C14.6299 4.62785 14.2541 4.16992 13.7719 3.84773C13.2897 3.52554 12.7228 3.35357 12.1429 3.35357ZM14.5338 11.7759L14.5338 11.7759L14.5354 11.7764C14.6162 11.8034 14.6909 11.8462 14.7549 11.9024C14.8189 11.9586 14.8711 12.027 14.9083 12.1036C14.9455 12.1803 14.9671 12.2636 14.9716 12.3486C14.9762 12.4337 14.9637 12.5188 14.9349 12.599C14.9061 12.6792 14.8616 12.7528 14.804 12.8155C14.7463 12.8782 14.6767 12.9288 14.5992 12.9642C14.5218 12.9997 14.438 13.0193 14.3529 13.0219C14.2677 13.0245 14.1829 13.0101 14.1034 12.9794L14.1034 12.9794L14.1017 12.9788C13.2276 12.6656 12.2909 12.5671 11.3707 12.6916C10.4505 12.8161 9.57373 13.1599 8.81421 13.6941C8.05469 14.2283 7.43469 14.9373 7.00646 15.7612C6.57823 16.5851 6.35431 17.4999 6.35357 18.4285V18.4286V19.1429L6.35357 19.1429C6.35403 19.5416 6.51258 19.9237 6.79444 20.2056C7.0763 20.4874 7.45845 20.646 7.85706 20.6464H7.85714H10.7143C10.8838 20.6464 11.0464 20.7138 11.1663 20.8337C11.2862 20.9536 11.3536 21.1162 11.3536 21.2857C11.3536 21.4553 11.2862 21.6179 11.1663 21.7378C11.0464 21.8576 10.8838 21.925 10.7143 21.925H7.85722C7.11957 21.9242 6.41237 21.6308 5.89077 21.1092C5.36917 20.5876 5.07579 19.8804 5.075 19.1428L5.075 18.4286C5.075 18.4286 5.075 18.4286 5.075 18.4286C5.07558 17.2949 5.34873 16.1779 5.87142 15.1719C6.3941 14.1659 7.15101 13.3003 8.07832 12.6481C9.00563 11.9959 10.0762 11.5762 11.1997 11.4244C12.3232 11.2726 13.4667 11.3931 14.5338 11.7759ZM16.3902 16.7475L16.5036 16.815V16.6831V12.0002C16.5038 11.8738 16.5415 11.7504 16.6118 11.6455C16.6821 11.5405 16.7819 11.4587 16.8986 11.4104C17.0153 11.362 17.1437 11.3493 17.2676 11.3738C17.3915 11.3984 17.5054 11.459 17.5949 11.5481L19.0226 12.9758C19.0227 12.9759 19.0228 12.976 19.023 12.9762C19.1396 13.0966 19.2043 13.2581 19.203 13.4258C19.2017 13.5936 19.1345 13.7543 19.0158 13.873C18.8971 13.9917 18.7365 14.0589 18.5686 14.0602C18.401 14.0615 18.2395 13.9968 18.119 13.8802C18.1189 13.8801 18.1188 13.8799 18.1186 13.8798L17.9102 13.6713L17.7821 13.5433V13.7244V19.1429C17.7821 19.6931 17.619 20.231 17.3133 20.6885C17.0076 21.1461 16.573 21.5026 16.0647 21.7132C15.5563 21.9238 14.9969 21.9789 14.4572 21.8715C13.9175 21.7642 13.4218 21.4992 13.0327 21.1101C12.6436 20.721 12.3787 20.2253 12.2713 19.6856C12.164 19.1459 12.2191 18.5865 12.4296 18.0782C12.6402 17.5698 12.9968 17.1353 13.4543 16.8296C13.9118 16.5239 14.4496 16.3608 14.9997 16.3607C15.4894 16.3635 15.9694 16.497 16.3902 16.7475ZM15 20.6464H15.0001C15.3987 20.646 15.7808 20.4874 16.0627 20.2056C16.3446 19.9237 16.5031 19.5416 16.5036 19.1429V19.1429C16.5036 18.8455 16.4154 18.5548 16.2502 18.3075C16.085 18.0603 15.8501 17.8675 15.5754 17.7537C15.3006 17.6399 14.9983 17.6102 14.7067 17.6682C14.415 17.7262 14.1471 17.8694 13.9368 18.0797C13.7265 18.2899 13.5833 18.5579 13.5253 18.8495C13.4673 19.1412 13.4971 19.4435 13.6109 19.7182C13.7247 19.993 13.9174 20.2278 14.1647 20.393C14.4119 20.5582 14.7026 20.6464 15 20.6464ZM14.4822 9.7868C13.7898 10.2495 12.9757 10.4964 12.1429 10.4964C11.0265 10.4952 9.95622 10.0512 9.16681 9.26176C8.3774 8.47235 7.93337 7.40203 7.93214 6.28563C7.93216 5.45286 8.17911 4.63879 8.64178 3.94637C9.10445 3.25392 9.76208 2.71422 10.5315 2.39552C11.3009 2.07682 12.1475 1.99344 12.9643 2.15591C13.7811 2.31838 14.5314 2.71941 15.1203 3.30829C15.7092 3.89717 16.1102 4.64745 16.2727 5.46425C16.4351 6.28105 16.3517 7.12768 16.033 7.89709C15.7143 8.66649 15.1747 9.32412 14.4822 9.7868Z" fill="white" stroke="#0D0D0D" stroke-width="0.15"></path></svg>                            </span>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-[0.438rem]">
                                    <span className="font-light opacity-80 text-base">Join Wynk for Artists</span>
                                </div>
                                <div className="text-xs text-wynk-gray1 pr-5">Sign up as an Artist on Wynk Studio and release your original songs on Wynk</div>
                            </div>
                        </a>
                    </div>
                </div>
            )}
            <AuthModal showLogin={showLogin} handleClose={() => setShowLogin(false)} navigate={navigate} />
            <DownloadModal showDownloadModal={showDownloadModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Dropdown;