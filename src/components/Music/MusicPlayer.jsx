import React, { useEffect, useRef, useState } from "react";
// import { useMusic } from "../../utils/MusicProvider";
import { ReactComponent as PlayIcon } from "../../assets/images/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/pause.svg";
import { useUser } from "../../utils/UserProvider";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { PROJECT_ID } from '../../utils/constant'

export const MusicPlayer = ({ data }) => {
  // const { selectedMusic } = useMusic();
  const { isUserLoggedIn } = useUser();
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [start] = useState("0");
  const [end, setEnd] = useState("0");
  const navigate = useNavigate();
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  // const { thumbnail, title, artist, audio_url, _id } = selectedMusic;
  // const artistList = artist && artist.map((item) => item.name).join(" & ");

  // const playPauseAudio = () => {
  //   setIsPlaying(!isPlaying);
  // };

  // const getTime = (duration) => {
  //   console.log("duration", duration);
  //   const endTime = Math.ceil(duration);
  //   let min = Math.floor(endTime / 60);
  //   let sec = endTime % 60;
  //   return `${min}:${sec}`;
  // };

  // useEffect(() => {
  //   if (audioRef.current) {
  //     const endTime = getTime(audioRef.current.duration);
  //     console.log("endTime", endTime);
  //     setEnd(endTime);
  //     if (isPlaying) {
  //       audioRef.current.play();
  //       console.log("duration", audioRef.current.duration);
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying, audioRef]);

  // if (!title) {
  //   return <></>;
  // }

  // const addToFavorite = async (songId, token) => {
  //   const url = `https://academics.newtonschool.co/api/v1/music/favorites/like`;
  //   return fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       projectId: PROJECT_ID,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ songId }),
  //   }).then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Failed to add to Favourite");
  //     }
  //     return response.json();
  //   });
  // };

  // const handleAddToFavorite = () => {
  //   addToFavorite(_id, isUserLoggedIn)
  //     .then((data) => {
  //       setAddedToWatchlist(true);
  //       console.log("Successfully added to Favourite!", data);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to add to Favourite:", error);
  //     });
  // };

  return (
    <section className="absolute bottom-0 h-20 w-full bg-slate-800 px-10 py-2 items-center justify-center gap-5 hidden" id="player">
    <img src={data.thumbnail} alt='song img' className="h-10 w-10" />
      <p className="text-white">{data.title}</p>
      <div>
      
      </div>
    </section>
  );
};
