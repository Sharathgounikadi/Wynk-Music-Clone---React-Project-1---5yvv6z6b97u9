import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import { useUser } from '../../utils/UserProvider';
import { PROJECT_ID } from '../../utils/constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MusicPlayer = () => {
  const { currentSong } = useUser();
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (currentSong) {
      fetchFavoriteState(currentSong._id);
    }
  }, [currentSong]);

  const fetchFavoriteState = async (songId) => {
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/music/favorites', {
        headers: {
          projectID: PROJECT_ID,
          Authorization: `Bearer ${token}`
        }
      });
      const favoriteIds = response.data.data.songs.map(fav => fav._id);
      setIsLiked(favoriteIds.includes(songId));
    } catch (error) {
      console.error('Error fetching favorite state:', error);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
  };

  const handleListen = (e) => {
    const { currentTime, duration } = e.target;
    const newProgress = (currentTime / duration) * 100;
    setProgress(newProgress);
  };

  const handleFavoriteToggle = async (songId) => {
    const isFavorite = isLiked;
    const url = `https://academics.newtonschool.co/api/v1/music/favorites/${isFavorite ? 'unlike' : 'like'}`;
    const action = isFavorite ? 'removed from' : 'added to';

    try {
      const response = await axios.patch(url, { songId }, {
        headers: {
          projectID: PROJECT_ID,
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setIsLiked(!isFavorite);
        toast.success(`Music ${action} favorite`,{autoClose:1000});
      } else {
        toast.error(`Failed to ${action} favorite`,{autoClose:1000});
      }
    } catch (error) {
      console.error('Error updating favorite:', error);
      toast.error('Error updating favorite');
    }
  };

  return (
    <section className="fixed bottom-0 w-[100%] flex items-center justify-center z-50">
      {currentSong && (
        <AudioPlayer
          src={currentSong.audio_url}
          progress={progress}
          onListen={handleListen}
          customProgressBarSection={[
            <div key="progress-bar" className="w-full">
              <input
                type="range"
                min="0"
                max="100"
                step="0.01"
                value={progress}
                className="h-8 absolute left-0 top-0 w-full cursor-pointer"
                onChange={handleProgressChange}
              />
            </div>
          ]}
          customAdditionalControls={[
            <div className='flex flex-row w-[100%]'>
              <div key={currentSong._id} className="flex items-center text-white ">
                <img src={currentSong.thumbnail} alt={currentSong.title} className="h-12 w-12 rounded-md mr-4" />
                <div className='justify-items-end'>
                  <div className="text-sm font-semibold truncate">{currentSong.title.split(' ').slice(0, 2).join(' ')}</div>
                  <div className="text-xs text-gray-400">
                    {currentSong.artist.map((artist) => artist.name).join(', ')}
                  </div>
                </div>
              </div>
              <div className='ml-[50%] pt-3 '>
                {token && !isLiked && (
                  <i className="far fa-heart cursor-pointer text-xl" onClick={() => handleFavoriteToggle(currentSong._id)} />
                )}
                {token && isLiked && (
                  <i className="fas fa-heart text-red-500 text-xl cursor-pointer" onClick={() => handleFavoriteToggle(currentSong._id)} />
                )}
              </div>
            </div>
          ]}
        />
      )}
      <ToastContainer />
    </section>
  );
};

export default MusicPlayer;