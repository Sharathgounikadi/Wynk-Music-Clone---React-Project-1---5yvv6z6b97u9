import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MusicPlayer from '../Music/MusicPlayer';
import TrendingImage from "../../assets/images/Trending.jpg";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsCircle, BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { useUser } from '../../utils/UserProvider';
import { PROJECT_ID } from '../../utils/constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrendingNow = () => {
  const { setCurrentSong, currentSong } = useUser();
  const [data, setData] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchFavorites = useCallback(async () => {
    try {
      if (token) {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/music/favorites', {
          headers: {
            projectID: PROJECT_ID,
            Authorization: `Bearer ${token}`
          }
        });
        setWatchList(response.data.data.songs.map(fav => fav._id));
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
      setError(error);
    }
  }, [token]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
        headers: {
          projectId: PROJECT_ID,
        },
        params: {
          featured: 'Trending songs',
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    if (token) {
      fetchFavorites();
    }
  }, [fetchData, fetchFavorites, token]);

  useEffect(() => {
    if (token) {
      fetchFavorites();
    }
  }, [currentSong, fetchFavorites, token]);

  const handleFavoriteToggle = async (songId) => {
    if(token){
    const isFavorite = watchList.includes(songId);
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
        setWatchList(prevWatchList => isFavorite ? prevWatchList.filter(id => id !== songId) : [...prevWatchList, songId]);
        toast.success(`Music ${action} favorite`, { autoClose: 1000 });
      } else {
        toast.error(`Failed to ${action} favorite`);
      }
    } catch (error) {
      console.error('Error updating favorite:', error);
      toast.error('Error updating favorite');
    }
  }else{
    toast("Please Login First"),{autoClose:1000};
  }
}

  const handleFollowToggle = () => {
    setIsFollowing(prevState => !prevState);
  };

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  const handlePlaySongs = async () => {
    await fetchData();
    if (data.length > 0) {
      setCurrentSong(data[0]);
    }
  };

  const handleNotifyClick = () => {
    toast.info('Feature under development', { autoClose: 500 });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="h-full w-full">
      <div className="xs:hidden lg:flex items-center text-gray-300 text-xs ml-24 my-2">
        <a href="/" className="text-[#394144] transition duration-200">Home</a>
        <span><BsDot /></span>
        <span>Trending in Hindi</span>
      </div>
      <div className="flex lg:ml-24 xs:ml-5 xs:mt-5">
        <img src={TrendingImage} className="rounded-md lg:h-52 lg:w-52 md:h-48 md:w-48 sm:h-40 sm:w-40 xs:h-36 xs:w-36" alt="Trending" />
        <div className="lg:w-full lg:ml-16 xs:mx-5 xs:mt-10">
          <div>
            <h1 className="text-slate-50 lg:text-4xl xs:text-lg">Trending in Hindi</h1>
            <div className='flex items-center text-slate-400 my-3 text-xs'>
              <span>4.5 L Follower</span>
              <span><BsDot /></span>
              <span>20 Songs</span>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <div className="inline-flex gap-4">
              <button className="bg-[#E3375C] border-none rounded-full p-2 text-slate-200 w-32 flex items-center" onClick={handlePlaySongs}>
                <FaPlay className="inline-flex text-base mx-2" />Play Songs
              </button>
              <button className="border-white border rounded-full p-2 text-white w-32 flex items-center" onClick={handleFollowToggle}>
                {isFollowing ? <FaCheck className="inline-flex text-base mx-2 text-center" /> : <FaPlus className="inline-flex text-base mx-2 text-center" />}
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            <div className="inline-flex gap-14 justify-between mr-2">
              <button  className="relative cursor-pointer" type="button">
                <BsCircle className="text-white text-4xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <MdOutlineFileDownload onClick={handleNotifyClick} className="text-white text-2xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
              <button className="relative cursor-pointer" type="button">
                <BsCircle className="text-white text-4xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <BsThreeDotsVertical onClick={handleNotifyClick} className="text-white text-xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
          </div>
          <div className="mt-6 overflow-hidden">
            <div className="block">
              {data.map((song, index) => (
                <SongItem
                  key={song._id}
                  song={song}
                  index={index}
                  watchList={watchList}
                  onClickSong={handleClickSong}
                  onClickFavorite={handleFavoriteToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
      {currentSong && <MusicPlayer />}
    </div>
  );
};

const handleNotifyClick = () => {
  toast.info('Feature under development', { autoClose: 500 });
};

const SongItem = ({ song, index, watchList, onClickSong, onClickFavorite }) => (
  <div className="flex items-center justify-between py-2 pl-2 pr-1 rounded-lg border-transparent border w-full hover:border-slate-800">
    <div className='text-white mx-4'>{index + 1}</div>
    <div className="group relative w-14 h-14 min-w-[3.5rem]" onClick={() => onClickSong(song)}>
      <span className="relative block">
        <img alt={song.title} src={song.thumbnail} className="rounded-md" />
      </span>
      <div className="absolute inset-0 cursor-pointer rounded-md group-hover:block bg-white z-10 bg-media-item-hover bg-opacity-50 hidden">
        <div className="absolute inline-block left-2/4 top-2/4 -translate-x-2/4 -translate-y-1/2">
          <i className="icon-ic_global_play_dark text-white"></i>
        </div>
      </div>
    </div>
    <div className="flex w-full" onClick={() => onClickSong(song)}>
      <div className="ml-4 flex flex-col lg:my-auto">
        <div className="text-base line-clamp-1 text-title cursor-pointer">
          <a title={song.title} className="text-white hover:underline">{song.title}</a>
        </div>
        <div className="text-xs text-subtitle-hover line-clamp-1 cursor-pointer">
          <span className="text-items text-white hover:underline">
            {song.artist.map((artist, idx) => (
              <span key={idx}>{artist.name}{idx < song.artist.length - 1 ? ', ' : ''}</span>
            ))}
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center text-xl gap-4 text-white">
      <i
        className={`fa-${watchList.includes(song._id) ? 'solid' : 'regular'} fa-heart`}
        style={{ color: watchList.includes(song._id) ? 'red' : 'white' }}
        onClick={() => onClickFavorite(song._id)}
      ></i>
      <button onClick={handleNotifyClick}>
        <a className="cursor-pointer"><MdOutlineFileDownload /></a>
      </button>
      <button onClick={handleNotifyClick}>
        <a className="cursor-pointer"><BsThreeDotsVertical /></a>
      </button>
    </div>
  </div>
);

export default TrendingNow;