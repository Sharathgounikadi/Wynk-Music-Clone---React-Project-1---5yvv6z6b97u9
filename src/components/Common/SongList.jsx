import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const SongList = () => {
  const location = useLocation();
  const songsData = location.state?.data || [];
  const { setCurrentSong, currentSong } = useUser();
  const { mood } = useParams();

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="h-full mt-5">
      <h2 className="text-title text-white font-medium text-3xl mx-5 my-5 lg:mx-20 lg:my-10">{mood.charAt(0).toUpperCase() + mood.slice(1)} Songs</h2>
      <div className="ml-5 sm:mx-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {songsData.map((song) => (
          <div key={song._id} className="mb-6" onClick={() => handleClickSong(song)}>
            <a title={song.title} className="rounded-xl block">
              <div className="w-full rounded-xl overflow-hidden">
                <img alt={song.title} src={song.thumbnail} className="w-full h-auto rounded-lg" />
              </div>
              <div className="truncate font-normal text-white text-base text-left pt-2 pl-2">{song.title}</div>
            </a>
          </div>
        ))}
      </div>
      {currentSong && <MusicPlayer />}
    </div>
  );
};

export default SongList;
