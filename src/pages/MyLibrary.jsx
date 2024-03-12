import React, { useEffect, useState } from "react";
import { useUser } from "../utils/UserProvider";
import { MusicProvider } from "../utils/MusicProvider";
import { MusicPlayer } from "../components/Music/MusicPlayer";
import { RxDividerVertical } from "react-icons/rx";
import { PROJECT_ID }  from "../utils/constant"

export const MyLibrary = () => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const { isUserLoggedIn } = useUser();

  const fetchFavoriteSongs = () => {
    if (!isUserLoggedIn) {
      setFavoriteSongs([]);
      return;
    }
    fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${isUserLoggedIn}`,
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch favorite songs");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched songs:", data);
        setFavoriteSongs(data.data.songs);
      })
      .catch((error) => {
        console.error("Error fetching favorite songs:", error);
      });
  };

  useEffect(() => {
    fetchFavoriteSongs();
  }, [isUserLoggedIn]);
  
  return (
    <MusicProvider>
        <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
        <span class="hover:opacity-60 cursor-pointer flex ">
            <span class="text-white hidden lg:block">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M6.37001 21.5383C7.77833 21.5383 8.92001 20.4011 8.92001 18.9983C8.92001 17.5954 7.77833 16.4583 6.37001 16.4583C4.96168 16.4583 3.82001 17.5954 3.82001 18.9983C3.82001 20.4011 4.96168 21.5383 6.37001 21.5383Z" 
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M8.91003 18.9982V6.57825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17.63 17.9982C19.0383 17.9982 20.18 16.861 20.18 15.4582C20.18 14.0554 19.0383 12.9182 17.63 12.9182C16.2216 12.9182 15.08 14.0554 15.08 15.4582C15.08 16.861 16.2216 17.9982 17.63 17.9982Z" 
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M20.1801 15.4582V3.03821" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.91003 6.57821L20.18 3.03821" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M9.22998 10.4181L20.18 6.97815" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </span>
            <div class=" text-white hidden lg:block ml-2 font-light">My Music</div>
        </span>
      <MusicPlayer />
    </MusicProvider>
  );
};
