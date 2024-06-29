import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import { useUser } from '../../utils/UserProvider';
import { PROJECT_ID } from '../../utils/constant';

const MusicPlayer = () => {
  const { currentSong } = useUser();
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLiked(false);
  }, [currentSong]);

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
  };

  const handleListen = (e) => {
    const { currentTime, duration } = e.target;
    const newProgress = (currentTime / duration) * 100;
    setProgress(newProgress);
  };

  const onClickHandler = (songId) => {
    axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', { songId }, {
      headers: {
        projectID: PROJECT_ID,
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response.data);
        setIsLiked(true);
      })
      .catch((error) => {
        console.error('Error making the PATCH request:', error); // Proper error handling needed
      });
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
              <div  className='ml-[50%] pt-3 '>
                  {token && !isLiked && (
                    <i className="far fa-heart cursor-pointer text-xl" onClick={() => onClickHandler(currentSong._id)} />
                  )}
                  {token && isLiked && (
                    <i className="fas fa-heart text-red-500 text-xl cursor-pointer" />
                  )}
                </div>
            </div>
          ]}
        />
      )}
    </section>
  );
};

export default MusicPlayer;