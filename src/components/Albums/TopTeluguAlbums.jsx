import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../../utils/constant';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';
import { BsDot } from "react-icons/bs";


const TopTeluguAlbums = () => {
    const [data, setData] = useState([]);
    const { setCurrentSong, currentSong } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song", {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                setData(response.data.data.slice(0, 10));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleClickSong = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="h-full">
            <div className='mx-24 my-1'>
                <div className="flex items-center text-gray-300 text-xs mb-5">
                    <a href="/" className="text-[#394144] transition duration-200">Home</a>
                    <span><BsDot className='text-xs' /></span>
                    <span>Top Telugu Albums</span>
                </div>
                <h1 className="text-title text-white font-medium text-4xl lg:mt-2">Top Telugu Albums</h1>
                <div className="flex-shrink-0 mt-5 gap-2">
                    {data.map((song) => (
                        <div key={song._id} className="inline-block sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 my-5" onClick={() => handleClickSong(song)}>
                            <a title={song.title} className="rounded-xl">
                                <div className="rounded-xl">
                                    <img src={song.thumbnail} alt={song.title} className="w-44 h-44 rounded-xl" />
                                </div>
                                <div className="truncate font-normal w-36 text-white text-base text-left pt-2 pl-2">{song.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {currentSong && <MusicPlayer />}
        </div>
    );
};

export default TopTeluguAlbums;