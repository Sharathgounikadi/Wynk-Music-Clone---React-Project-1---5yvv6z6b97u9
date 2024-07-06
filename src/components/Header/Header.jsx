import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { PROJECT_ID } from '../../utils/constant';
import { toast,ToastContainer } from 'react-toastify';

function Header() {
    const [activeLink, setActiveLink] = useState('All');
    const [showHeader, setShowHeader] = useState(true);
    const [isMoodOpen, setMoodOpen] = useState(false);
    const [isAlbumOpen, setAlbumOpen] = useState(false);
    const [happy, setHappy] = useState([]);
    const [sad, setSad] = useState([]);
    const [excited, setExcited] = useState([]);
    const [romantic, setRomantic] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const notify = () => {
        toast('Feature under development', { autoClose: 500 });
      };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'Trending Now') {
            navigate('/trending');
        } else if (link === 'Top Artists') {
            navigate('/artist');
        } else if (link === 'Old Songs' || link === 'New Songs') {
            navigate(`/songs/${link.toLowerCase().replace(' ', '_')}`);
        } else if (link === 'Happy' || link === 'Excited' || link === 'Romantic' || link === 'Sad' || link === 'Party' || link === 'Dance') {
            navigate(`/songlist/${link.toLowerCase()}`);
        } else if (link.startsWith('Top') && link.endsWith('Albums')) {
            navigate(`/albums/${link.split(' ').slice(1).join('_').toLowerCase()}`);
        } else if (link === 'Podcast') {
            navigate('/podcast');
        } else if (link === 'All') {
            navigate('/');
        }
    };

    const handleMoodSelect = (mood) => {
        const playlist = mood === 'Happy' ? happy :
            mood === 'Sad' ? sad :
                mood === 'Excited' ? excited :
                    mood === 'Romantic' ? romantic :
                        [];
        navigate(`/songlist/${mood.toLowerCase()}`, { state: { data: playlist } });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                const data = response.data.data;
                setHappy(data.filter(item => item.mood === 'happy'));
                setSad(data.filter(item => item.mood === 'sad'));
                setExcited(data.filter(item => item.mood === 'excited'));
                setRomantic(data.filter(item => item.mood === 'romantic'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }; 
        fetchData();

        const hideHeaderPaths = [
            "/subscription",
            "/search",
            "/mymusic",
            // "/songlist",
            "/selectsound",
            "/selectlanguage",
            "/podcast"
        ];
        const shouldShowHeader = !hideHeaderPaths.some(path => location.pathname.includes(path));
        setShowHeader(shouldShowHeader);
    }, [location]);

    return (
        <header className={`${showHeader ? 'block' : 'hidden'}`}>
            {/* <ToastContainer/> */}
            {/* For Large Screen */}
            <div className='lg:flex md:flex md:text-nowrap no-scrollbar lg:h-16 md:h-10 lg:ml-24 md:px-10 text-[#f9f9f9] gap-7 items-center hidden'>
                <div className={`hover:underline underline-offset-[6px]  ${activeLink === 'All' ? 'text-white' : 'text-slate-400'}`}>
                    <Link to="/" title="All" onClick={() => handleLinkClick('All')}>All</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Trending Now' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/trending" title="Trending Now" onClick={() => handleLinkClick('Trending Now')}>Trending Now</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Old Songs' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/songs/old_songs" title="Old Songs" onClick={() => handleLinkClick('Old Songs')}>Old Songs</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'New Songs' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/songs/new_songs" title="New Songs" onClick={() => handleLinkClick('New Songs')}>New Songs</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] relative ${activeLink !== 'Moods & Genre' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center" onMouseEnter={() => setMoodOpen(true)} onMouseLeave={() => setMoodOpen(false)}>
                        <button className="hover:underline underline-offset-[6px]">
                            <div className="flex items-center gap-1.5">Moods & Genre
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {isMoodOpen && (
                            <div className="absolute top-full w-48 h-auto p-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-50 left-1/2 transform -translate-x-1/2">
                                <div className='bg-transparent items-center justify-center'>
                                    {['Happy', 'Excited', 'Romantic', 'Sad', 'Party', 'Dance'].map(mood => (
                                        <button key={mood} onClick={() => handleMoodSelect(mood)} className={`py-2 block hover:underline ${activeLink === mood ? 'text-white' : 'text-slate-300'}`}>{mood}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] relative ${activeLink !== 'Top Albums' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center" onMouseEnter={() => setAlbumOpen(true)} onMouseLeave={() => setAlbumOpen(false)}>
                        <button className="hover:underline underline-offset-[6px]">
                            <div className="flex items-center gap-1.5">Top Albums
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {isAlbumOpen && (
                            <div className="absolute top-full w-48 h-auto p-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-50 left-1/2 transform -translate-x-1/2">
                            <div className='bg-transparent items-center justify-center '>
                                <Link to="/albums/hindi" className={`py-2 block hover:underline ${activeLink === 'Top Hindi Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Hindi Albums')}>Top Hindi Albums</Link>
                                <Link to="/albums/english" className={`py-2 block hover:underline ${activeLink === 'Top English Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top English Albums')}>Top English Albums</Link>
                                <Link to="/albums/telugu" className={`py-2 block hover:underline ${activeLink === 'Top Telugu Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Telugu Albums')}>Top Telugu Albums</Link>
                                <Link to="/albums/tamil" className={`py-2 block hover:underline ${activeLink === 'Top Tamil Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Tamil Albums')}>Top Tamil Albums</Link>
                                <Link to="/albums/bhojpuri" className={`py-2 block hover:underline ${activeLink === 'Top Bhojpuri Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Bhojpuri Albums')}>Top Bhojpuri Albums</Link>
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Top Artists' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/artist" title="Top Artists" onClick={() => handleLinkClick('Top Artists')}>Top Artists</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Podcast' ? 'text-slate-400' : 'text-white'}`}>
                    <div  title="Podcast" onClick={notify}>Podcast</div>
                </div>
            </div>

            {/* For Small Screen */}
            <div className='lg:hidden md:hidden flex items-center text-nowrap text-[#f9f9f9] gap-5 ml-2 p-2 overflow-y-hidden no-scrollbar'>
                <Link to="/" className={`hover:underline underline-offset-[6px] ${activeLink === 'All' ? 'text-white' : 'text-slate-400'}`} onClick={() => handleLinkClick('All')}>All</Link>
                <Link to="/trending" className={`hover:underline underline-offset-[6px] ${activeLink === 'Trending Now' ? 'text-white' : 'text-slate-400'}`} onClick={() => handleLinkClick('Trending Now')}>Trending Now</Link>
                <Link to="/songs/old_songs" className={`hover:underline underline-offset-[6px] ${activeLink === 'Old Songs' ? 'text-white' : 'text-slate-400'}`} onClick={() => handleLinkClick('Old Songs')}>Old Songs</Link>
                <Link to="/songs/new_songs" className={`hover:underline underline-offset-[6px] ${activeLink === 'New Songs' ? 'text-white' : 'text-slate-400'}`} onClick={() => handleLinkClick('New Songs')}>New Songs</Link>
                <div className='relative z-10'>
                    <button className={`hover:underline underline-offset-[6px] flex items-center ${activeLink === 'Moods & Genre' ? 'text-white' : 'text-slate-400'}`} onClick={() => setMoodOpen(!isMoodOpen)}>
                        Moods & Genre
                        <span className="ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    {isMoodOpen && (
                        <div className="absolute top-full w-48 h-auto mt-2 p-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-10">
                            {['Happy', 'Excited', 'Romantic', 'Sad', 'Party', 'Dance'].map(mood => (
                                <button key={mood} onClick={() => handleMoodSelect(mood)} className={`py-2 block ${activeLink === mood ? 'text-white' : 'text-slate-300'}`}>{mood}</button>
                            ))}
                        </div>
                    )}
                </div>

                <div className='relative z-10'>
                    <button className={`hover:underline underline-offset-[6px] flex items-center ${activeLink === 'Top Albums' ? 'text-white' : 'text-slate-400'}`} onClick={() => setAlbumOpen(!isAlbumOpen)}>
                        Top Albums
                        <span className="ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    {isAlbumOpen && (   
                        <div className="absolute top-full w-48 h-auto mt-2 p-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-10 left-1/2 transform -translate-x-1/2">
                        <div className='bg-transparent items-center justify-center'>
                            <Link to="/albums/hindi" className={`py-2 block ${activeLink === 'Top Hindi Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Hindi Albums')}>Top Hindi Albums</Link>
                            <Link to="/albums/english" className={`py-2 block ${activeLink === 'Top English Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top English Albums')}>Top English Albums</Link>
                            <Link to="/albums/telugu" className={`py-2 block ${activeLink === 'Top Telugu Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Telugu Albums')}>Top Telugu Albums</Link>
                            <Link to="/albums/tamil" className={`py-2 block ${activeLink === 'Top Tamil Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Tamil Albums')}>Top Tamil Albums</Link>
                            <Link to="/albums/bhojpuri" className={`py-2 block ${activeLink === 'Top Bhojpuri Albums' ? 'text-white' : 'text-slate-300'}`} onClick={() => handleLinkClick('Top Bhojpuri Albums')}>Top Bhojpuri Albums</Link>
                        </div>
                    </div>
                    )}
                </div>
                <Link to="/artist" className={`hover:underline underline-offset-[6px] ${activeLink === 'Top Artists' ? 'text-white' : 'text-slate-400'}`} onClick={() => handleLinkClick('Top Artists')}>Top Artists</Link>
                <div  className={`hover:underline underline-offset-[6px] ${activeLink === 'Podcast' ? 'text-white' : 'text-slate-400'}`} onClick={notify}>Podcast</div>
            </div>
        </header>
    );
}

export default Header;