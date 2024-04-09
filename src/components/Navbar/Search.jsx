import React, { useEffect } from 'react';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const Search = () => {
    const { getCurrentSong, setCurrentSong} = useUser();
    const { searchData, setsearchData } = useUser();
    console.log(searchData);

    useEffect(() => {
    }, [searchData])

    const handleClickSong = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="h-full">
            <h2 className="text-left mx-20 my-10 text-xl text-white">Recent Searches</h2>
            <div className='mx-20 my-10'>
                <div className="flex-shrink-0 mt-5 gap-2">
                    {searchData.map((song) => (
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
            {getCurrentSong && <MusicPlayer />}
        </div>
    );
};

export default Search;
