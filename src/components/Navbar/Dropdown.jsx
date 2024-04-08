import React, { useState } from 'react';
import { useUser } from '../../utils/UserProvider';
import { ToastContainer } from 'react-toastify';
import DownloadModal from './DownloadModal';
import Maintenance from '../Common/UnderMaintenance'

const Dropdown = () => {
    const { userName, signOutContext, isUserLoggedIn } = useUser();
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showCommonSelection, setshowCommonSelection] = useState(false);



    const handleDownload = () => {
        setShowDownloadModal(true);
        setDropdownOpen(false);

    };

    const handelCommon = () => {
        setshowCommonSelection(!showCommonSelection);
    };

    return (
        <div>
            <div className="relative h-full flex items-center text-white bg-[#1C1B1B]">
                <div className="bg-[#1C1B1B] z-30 absolute top-full mr-12 mt-2 w-64 h-fit right-0 pt-5 rounded-xl stroke-2 shadow-popover transform opacity-100 scale-100">
                    <div className="flex items-center gap-3 hover:opacity-60 mb-5 px-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M2.90625 20.2508C3.82775 18.6544 5.15328 17.3287 6.74958 16.407C8.34588 15.4853 10.1567 15 12 15C13.8433 15 15.6541 15.4853 17.2504 16.407C18.8467 17.3287 20.1722 18.6544 21.0938 20.2508" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <span className="font-light opacity-80">{userName}</span>
                    </div>
                    <div className="flex gap-3 stroke-2 hover:opacity-60 cursor-pointer border-t border-[#2F3031] pt-5 px-4 relative" ></div>
                    <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handleDownload}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block" stroke="currentColor">
                                <path d="M12 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M9 13L11.6464 15.6464C11.8417 15.8417 12.1583 15.8417 12.3536 15.6464L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5"></circle>
                            </svg>
                        </span>
                        <span className="font-light opacity-80">Download App</span>
                    </div>
                    <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handelCommon}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <rect x="3.14001" y="4.4823" width="9.8" height="9.8" rx="1.5" stroke="currentColor"></rect>
                                <path d="M5.22882 12.5083L7.42751 6.25635H8.65273L10.8514 12.5083H9.79403L9.31569 11.1069H6.77294L6.2862 12.5083H5.22882ZM7.05826 10.2257H9.01358L7.90585 6.95288H8.18278L7.05826 10.2257Z" fill="currentColor"></path>
                                <rect x="10.5601" y="11.1824" width="10.8" height="10.8" rx="2" fill="#181926" stroke="currentColor"></rect>
                                <path d="M19.2 14.0623V14.7386H17.7497V20.1662H17.5495L17.0001 19.5168V17.3706C16.6509 17.4878 16.3042 17.5342 15.9649 17.5098C15.9795 17.5977 15.9893 17.6856 15.9893 17.771C15.9893 18.1397 15.8672 18.44 15.6255 18.6696C15.3813 18.8991 15.0663 19.0163 14.6781 19.0163C14.1752 19.0163 13.743 18.7916 13.3816 18.3424C13.0203 17.8931 12.8005 17.3609 12.72 16.748H12.9592C13.0423 17.2119 13.2254 17.5977 13.511 17.9029C13.7967 18.2081 14.1166 18.3619 14.473 18.3619C14.705 18.3619 14.9223 18.2862 15.1225 18.1324C15.3227 17.9786 15.4228 17.7686 15.4228 17.4976C15.4228 17.3462 15.374 17.1997 15.2788 17.0605C15.1835 16.9214 15.0444 16.8188 14.8613 16.7505C14.6781 16.6821 14.5292 16.6479 14.4096 16.6479C14.2899 16.6479 14.1092 16.6723 13.87 16.7236L13.3353 16.0985C13.9212 16.0546 14.39 15.9374 14.7465 15.747C15.103 15.559 15.2812 15.3294 15.2812 15.0633C15.2812 14.8948 15.208 14.7557 15.0639 14.6434C14.9199 14.531 14.7441 14.4773 14.5414 14.4773C14.1825 14.4773 13.7161 14.6336 13.1448 14.9486L12.72 14.3382C13.1741 14.155 13.6112 14.0623 14.0311 14.0623C14.5194 14.0623 14.915 14.1843 15.2153 14.4309C15.5156 14.6775 15.667 15.0047 15.667 15.41C15.667 15.6444 15.5913 15.8495 15.4424 16.0253C15.2934 16.2011 15.0688 16.3451 14.7709 16.4599C15.2934 16.7016 15.7256 16.8213 16.0674 16.8213C16.69 16.8213 17.0025 16.5185 17.0025 15.9105V14.7386H16.2774L15.7427 14.0623H19.2Z" fill="#E8EAED"></path>
                                <path d="M4.56978 16.4891C4.26853 17.8974 4.64773 20.6046 8.57452 20.1673" stroke="currentColor" stroke-width="0.8"></path>
                                <path d="M7.76624 19.2633L8.69669 20.074L7.76624 21.0635" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3.55902 17.4042L4.36152 16.4737L5.3188 17.4042" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span className="font-light opacity-80">Select Language</span>
                    </div>
                    <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handelCommon}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M5.75 10.5281H3V14.4581H5.75V10.5281Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12.57 19.3181L5.75 14.4481V10.5181L12.57 5.64811C13.18 5.21811 14 5.67811 14 6.46811V18.4981C14 19.2881 13.18 19.7581 12.57 19.3181Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M19.24 8.24811C20.33 9.32811 21 10.8281 21 12.4881C21 14.1481 20.33 15.6481 19.24 16.7281" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.12 10.3681C17.66 10.9081 18 11.6581 18 12.4881C18 13.3181 17.66 14.0681 17.12 14.6081" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14 11.4881C14.55 11.4881 15 11.9381 15 12.4881C15 13.0381 14.55 13.4881 14 13.4881" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <span className="font-light opacity-80">Sound Quality</span>
                    </div>
                    <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handelCommon}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M11.35 20.1994V20.1222L11.2753 20.1027C10.0274 19.7762 9.1 18.652 9.1 17.3044V12.0544C9.1 10.4522 10.3977 9.15444 12 9.15444C13.6023 9.15444 14.9 10.4522 14.9 12.0544V17.3044C14.9 18.652 13.9726 19.7762 12.7247 20.1027L12.65 20.1222V20.1994V21.8044C12.65 22.1617 12.3573 22.4544 12 22.4544C11.6427 22.4544 11.35 22.1617 11.35 21.8044V20.1994ZM12 18.9044C12.8802 18.9044 13.6 18.1847 13.6 17.3044V12.0544C13.6 11.1742 12.8802 10.4544 12 10.4544C11.1198 10.4544 10.4 11.1742 10.4 12.0544V17.3044C10.4 18.1847 11.1198 18.9044 12 18.9044ZM17.25 12.7044C16.8927 12.7044 16.6 12.4117 16.6 12.0544C16.6 9.51672 14.5377 7.45444 12 7.45444C9.46227 7.45444 7.4 9.51672 7.4 12.0544C7.4 12.4117 7.10727 12.7044 6.75 12.7044C6.39273 12.7044 6.1 12.4117 6.1 12.0544C6.1 8.80217 8.74773 6.15444 12 6.15444C15.2523 6.15444 17.9 8.80217 17.9 12.0544C17.9 12.4117 17.6073 12.7044 17.25 12.7044ZM20.25 12.7044C19.8927 12.7044 19.6 12.4117 19.6 12.0544C19.6 7.86672 16.1877 4.45444 12 4.45444C7.81227 4.45444 4.4 7.86672 4.4 12.0544C4.4 12.4117 4.10727 12.7044 3.75 12.7044C3.39273 12.7044 3.1 12.4117 3.1 12.0544C3.1 7.14467 7.09023 3.15444 12 3.15444C16.9098 3.15444 20.9 7.14467 20.9 12.0544C20.9 12.4117 20.6073 12.7044 20.25 12.7044Z" fill="currentColor" stroke="#191C3D" stroke-width="0"></path>
                            </svg>
                        </span>
                        <span className="font-light opacity-80">Podcast</span>
                    </div>
                    {isUserLoggedIn ? (
                        <div>
                            <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={signOutContext}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <g clip-path="url(#clip0_604_622)">
                                            <path d="M17.5999 20.7001L12.5999 21.9001C11.8999 22.1001 11.2999 21.6001 11.2999 20.9001V4.50013C11.2999 3.80013 11.8999 3.30013 12.5999 3.50013L17.5999 4.70013C18.0999 4.80013 18.3999 5.20013 18.3999 5.70013V19.7001C18.3999 20.1001 18.0999 20.6001 17.5999 20.7001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.09998 20.9001H5.59998V4.80011H9.09998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.6 14.1001C14.1523 14.1001 14.6 13.4733 14.6 12.7001C14.6 11.9269 14.1523 11.3001 13.6 11.3001C13.0477 11.3001 12.6 11.9269 12.6 12.7001C12.6 13.4733 13.0477 14.1001 13.6 14.1001Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_604_622">
                                                <rect width="24" height="24" fill="white" transform="translate(0 0.700134)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="font-light opacity-80">Sign Out</span>
                            </div>
                        </div>
                    ) :
                        <></>
                    }
                    <a target="_blank" className="flex gap-3 stroke-2 hover:opacity-60 cursor-pointer mb-5 border-t border-[#2F3031] pt-5 px-4 relative" href="https://studio.wynk.in">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.1429 3.35357L12.1428 3.35357C11.3654 3.35441 10.6201 3.66359 10.0704 4.21328C9.52073 4.76296 9.21155 5.50826 9.21071 6.28564V6.28572C9.21071 6.86564 9.38268 7.43254 9.70487 7.91473C10.0271 8.39691 10.485 8.77274 11.0208 8.99466C11.5566 9.21659 12.1461 9.27466 12.7149 9.16152C13.2837 9.04838 13.8061 8.76912 14.2162 8.35905C14.6263 7.94899 14.9055 7.42653 15.0187 6.85775C15.1318 6.28897 15.0737 5.69941 14.8518 5.16363C14.6299 4.62785 14.2541 4.16992 13.7719 3.84773C13.2897 3.52554 12.7228 3.35357 12.1429 3.35357ZM14.5338 11.7759L14.5338 11.7759L14.5354 11.7764C14.6162 11.8034 14.6909 11.8462 14.7549 11.9024C14.8189 11.9586 14.8711 12.027 14.9083 12.1036C14.9455 12.1803 14.9671 12.2636 14.9716 12.3486C14.9762 12.4337 14.9637 12.5188 14.9349 12.599C14.9061 12.6792 14.8616 12.7528 14.804 12.8155C14.7463 12.8782 14.6767 12.9288 14.5992 12.9642C14.5218 12.9997 14.438 13.0193 14.3529 13.0219C14.2677 13.0245 14.1829 13.0101 14.1034 12.9794L14.1034 12.9794L14.1017 12.9788C13.2276 12.6656 12.2909 12.5671 11.3707 12.6916C10.4505 12.8161 9.57373 13.1599 8.81421 13.6941C8.05469 14.2283 7.43469 14.9373 7.00646 15.7612C6.57823 16.5851 6.35431 17.4999 6.35357 18.4285V18.4286V19.1429L6.35357 19.1429C6.35403 19.5416 6.51258 19.9237 6.79444 20.2056C7.0763 20.4874 7.45845 20.646 7.85706 20.6464H7.85714H10.7143C10.8838 20.6464 11.0464 20.7138 11.1663 20.8337C11.2862 20.9536 11.3536 21.1162 11.3536 21.2857C11.3536 21.4553 11.2862 21.6179 11.1663 21.7378C11.0464 21.8576 10.8838 21.925 10.7143 21.925H7.85722C7.11957 21.9242 6.41237 21.6308 5.89077 21.1092C5.36917 20.5876 5.07579 19.8804 5.075 19.1428L5.075 18.4286C5.075 18.4286 5.075 18.4286 5.075 18.4286C5.07558 17.2949 5.34873 16.1779 5.87142 15.1719C6.3941 14.1659 7.15101 13.3003 8.07832 12.6481C9.00563 11.9959 10.0762 11.5762 11.1997 11.4244C12.3232 11.2726 13.4667 11.3931 14.5338 11.7759ZM16.3902 16.7475L16.5036 16.815V16.6831V12.0002C16.5038 11.8738 16.5415 11.7504 16.6118 11.6455C16.6821 11.5405 16.7819 11.4587 16.8986 11.4104C17.0153 11.362 17.1437 11.3493 17.2676 11.3738C17.3915 11.3984 17.5054 11.459 17.5949 11.5481L19.0226 12.9758C19.0227 12.9759 19.0228 12.976 19.023 12.9762C19.1396 13.0966 19.2043 13.2581 19.203 13.4258C19.2017 13.5936 19.1345 13.7543 19.0158 13.873C18.8971 13.9917 18.7365 14.0589 18.5686 14.0602C18.401 14.0615 18.2395 13.9968 18.119 13.8802C18.1189 13.8801 18.1188 13.8799 18.1186 13.8798L17.9102 13.6713L17.7821 13.5433V13.7244V19.1429C17.7821 19.6931 17.619 20.231 17.3133 20.6885C17.0076 21.1461 16.573 21.5026 16.0647 21.7132C15.5563 21.9238 14.9969 21.9789 14.4572 21.8715C13.9175 21.7642 13.4218 21.4992 13.0327 21.1101C12.6436 20.721 12.3787 20.2253 12.2713 19.6856C12.164 19.1459 12.2191 18.5865 12.4296 18.0782C12.6402 17.5698 12.9968 17.1353 13.4543 16.8296C13.9118 16.5239 14.4496 16.3608 14.9997 16.3607C15.4894 16.3635 15.9694 16.497 16.3902 16.7475ZM15 20.6464H15.0001C15.3987 20.646 15.7808 20.4874 16.0627 20.2056C16.3446 19.9237 16.5031 19.5416 16.5036 19.1429V19.1429C16.5036 18.8455 16.4154 18.5548 16.2502 18.3075C16.085 18.0603 15.8501 17.8675 15.5754 17.7537C15.3006 17.6399 14.9983 17.6102 14.7067 17.6682C14.415 17.7262 14.1471 17.8694 13.9368 18.0797C13.7265 18.2899 13.5833 18.5579 13.5253 18.8495C13.4673 19.1412 13.4971 19.4435 13.6109 19.7182C13.7247 19.993 13.9174 20.2278 14.1647 20.393C14.4119 20.5582 14.7026 20.6464 15 20.6464ZM14.4822 9.7868C13.7898 10.2495 12.9757 10.4964 12.1429 10.4964C11.0265 10.4952 9.95622 10.0512 9.16681 9.26176C8.3774 8.47235 7.93337 7.40203 7.93214 6.28563C7.93216 5.45286 8.17911 4.63879 8.64178 3.94637C9.10445 3.25392 9.76208 2.71422 10.5315 2.39552C11.3009 2.07682 12.1475 1.99344 12.9643 2.15591C13.7811 2.31838 14.5314 2.71941 15.1203 3.30829C15.7092 3.89717 16.1102 4.64745 16.2727 5.46425C16.4351 6.28105 16.3517 7.12768 16.033 7.89709C15.7143 8.66649 15.1747 9.32412 14.4822 9.7868Z" fill="white" stroke="#0D0D0D" stroke-width="0.15"></path>
                            </svg>
                        </span>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-[0.438rem]">
                                <span className="font-light opacity-80 text-base">Join Wynk for Artists</span>
                            </div>
                            <div className="text-xs text-wynk-gray1 pr-5">Sign up as an Artist on Wynk Studio and release your original songs on Wynk</div>
                        </div>
                    </a >
                </div>
            </div >
            {showCommonSelection && <Maintenance />}
            <DownloadModal showDownloadModal={showDownloadModal} />
            <ToastContainer />

        </div>
    );
}

export default Dropdown;