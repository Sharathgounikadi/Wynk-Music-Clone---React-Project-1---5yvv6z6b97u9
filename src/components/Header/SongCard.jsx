import React, { useState, useEffect } from 'react';
import { OLD_SONGS_API, NEW_SONGS_API, PROJECT_ID } from '../../utils/constant';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const SongCard = ({ }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const currentUrl = location.pathname;
    const { setCurrentSong, currentSong } = useUser();

    const handleClickSong = (song) => {
        setCurrentSong(song);
    };


    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = currentUrl.split('/').pop() === 'old_songs' ? OLD_SONGS_API : NEW_SONGS_API;
            console.log('API URL:', apiUrl);

            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const responseData = await response.json();
                setData(responseData.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [currentUrl]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="h-full">
            <div className='mx-20 my-10'>
                <h1 className="text-title text-white font-medium text-4xl lg:mt-1.5">{currentUrl.split('/').pop() == 'old_songs' ? 'Old Songs' : 'New Songs'}</h1>
                <div className="flex-shrink-0 mt-5 gap-2">
                    {data.map((song) => (
                        <div key={song._id} className="inline-block sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-5" onClick={() => handleClickSong(song)}>
                            <a title={song.title} className="rounded-xl">
                                <div className="rounded-xl">
                                    <img src={song.thumbnail} className="w-44 h-44 rounded-xl" />
                                </div>
                                <div className="truncate font-normal w-44 text-white text-base text-left pt-2">{song.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {currentSong && <MusicPlayer />}
        </div>
    );
}

export default SongCard;
