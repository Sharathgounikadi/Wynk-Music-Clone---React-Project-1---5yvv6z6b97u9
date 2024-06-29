import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../../utils/constant';
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import MusicPlayer from './MusicPlayer';
// import { useUser } from '../../utils/UserProvider';
import { useLocation } from 'react-router-dom';

const MyMusic = (songId) => {
  const [favorites, setFavorites] = useState([]);
  const [showHeader, setShowHeader] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    setShowHeader(location.pathname !== '/mymusic'); 
  }, [location]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'projectId': PROJECT_ID,
            }
          });
          setFavorites(response.data.data.songs);
        } else {
          console.error('Token not found in local storage');
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  const { currentSong, setCurrentSong, getToken } = useUser();

  const handleSongClick = (song) => {
    setCurrentSong(song);
    //console.log(song);
  };

  const handlePlaySongs = () => {
    toast.info('Feature under development');
  };

  const updateFavorites = async (songId) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.patch(
          'https://academics.newtonschool.co/api/v1/music/favorites/like',
          { songId: songId },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'projectId': PROJECT_ID,
            }
          }
        );
        const updatedFavorites = favorites.map(song => {
          if (song._id === songId) {
            return { ...song, liked: true };
          }
          return song;
        });
        setFavorites(updatedFavorites);
      } else {
        console.error('Token not found in local storage');
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  return (
    <div className='h-full'>
      <div className="container-layout ml-24 lg:mt-0 mt-4">
        <h1 className="text-title text-white text-4xl mx-10 my-5 font-medium">My Music</h1>
        <div className="flex">
          <img src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/https://wynk-music-cms.s3.ap-south-1.amazonaws.com/like_playlist/Round%403x.png"
            className="rounded-md h-60"
            alt="Liked Songs Playlist"
          />
          <div className="mx-20 w-full">
            <div>
              <h1 className="text-slate-50 text-4xl">Liked Songs</h1>
              <div className="text-sm text-slate-400 leading-6 font-medium">Last updated on 14 Feb 2024</div>
              <div className="text-xs text-slate-400 leading-6">{favorites.length} songs</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="inline-flex gap-4">
                <button className="bg-[#E3375C] border-none rounded-full p-2 text-slate-200 w-32 flex items-center" onClick={handlePlaySongs}>
                  <FaPlay className="inline-flex text-base mx-2" />Play Songs
                </button>
                <button className="border-white border rounded-full p-2 text-white w-32 flex items-center" onClick={handlePlaySongs}>
                  <MdOutlineFileDownload className="inline-flex text-3xl text-center" />Download
                </button>
              </div>
              <div className="inline-flex ml-10 gap-4 justify-end">
                <button className="btn-popover text-2xl" type="button" onClick={handlePlaySongs}>
                  <IoIosShareAlt className="text-white bg-transparent" />
                </button>
                <button className="btn-popover" type="button" onClick={handlePlaySongs}>
                  <PiDotsThreeCircleVerticalLight className="text-white text-4xl bg-transparent" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="block">
                {favorites.map((song, index) => (
                  <div key={index} className="flex items-center justify-between py-2 pl-2 pr-1 rounded-lg border-transparent border w-full cursor-pointer hover:border-slate-800" onClick={() => handleSongClick(song)}>
                    <div className="group relative w-14 h-14 min-w-[3.5rem]">
                      <span className="relative block">
                        <img alt={song.title} src={song.thumbnail} className="rounded-md" />
                      </span>
                      <div className="absolute inset-0 cursor-pointer rounded-md group-hover:block bg-white z-10 bg-media-item-hover bg-opacity-50 hidden">
                        <div className="absolute inline-block left-2/4 top-2/4 -translate-x-2/4 -translate-y-1/2">
                          <i className="icon-ic_global_play_dark text-white"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="ml-4 flex flex-col lg:my-auto">
                        <div className="text-base line-clamp-1 text-title">
                          <a title={song.title} className=" text-white hover:underline">{song.title}</a>
                        </div>
                        <div className="text-xs text-subtitle-hover line-clamp-1">
                          <span className="text-items text-white hover:underline">
                            {song.artist}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-xl gap-4 cursor-pointer text-white">
                      <button onClick={handlePlaySongs}>
                        <MdOutlineFileDownload />
                      </button>
                      <button onClick={handlePlaySongs}>
                        <BsThreeDotsVertical />
                      </button>
                      {getToken && !song.liked && (
                        <button onClick={() => updateFavorites(song._id)}>
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      )}
                      {getToken && song.liked && (
                        <button>
                          <i className="fa-solid fa-heart" style={{ color: 'red' }}></i>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentSong && <MusicPlayer song={currentSong} />}
    </div>
  );
};

export default MyMusic;