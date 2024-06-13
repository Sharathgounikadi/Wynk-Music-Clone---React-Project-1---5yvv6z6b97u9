import React from 'react';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const Search = () => {
    const { setCurrentSong, searchData } = useUser();

    const handleClickSong = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="h-full ">
            <h2 className="text-left mx-24 my-5 text-xl text-white">Search Results</h2>
            <div className="mx-24">
                <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {searchData && searchData.length > 0 ? (
                        searchData.map((song) => (
                            <div
                                key={song._id}
                                className="cursor-pointer"
                                onClick={() => handleClickSong(song)}
                            >
                                <a title={song.title} className="rounded-xl">
                                    <div className="rounded-xl">
                                        <img src={song.thumbnail} className="w-full h-44 rounded-xl object-cover" alt={song.title} />
                                    </div>
                                    <div className="truncate font-normal text-white text-base text-left pt-2">{song.title}</div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="text-white">No search results found.</div>
                    )}
                </div>
            </div>
            <MusicPlayer />
        </div>
    );
};

export default Search;