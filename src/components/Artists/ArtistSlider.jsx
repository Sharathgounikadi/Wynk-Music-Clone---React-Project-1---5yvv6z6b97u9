import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { PROJECT_ID } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const ArtistSlider = () => {
  const [artistData, setArtistData] = useState([]); // State to store artist data
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch artist data from the API
    const fetchArtistData = async () => {
      try {
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/album", {
          headers: {
            projectId: PROJECT_ID, // Use project ID from constants
          },
        });
        // Set fetched data to the state
        setArtistData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchArtistData(); // Call the fetch function when the component mounts
  }, []);

  // Slider settings configuration
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-8 px-10">
      <h2 className="text-2xl text-white pl-3">Top Indie Artists</h2>
      <div className="h-full w-full pt-4 py-4">
        <Slider {...sliderSettings}>
          {artistData.map((album) =>
            album.artists.map((artist) => (
              <div key={artist._id} className="text-center" onClick={() => navigate('/Maintenance')}>
                <img
                  className="rounded-full h-[160px] w-[160px] mx-auto"
                  src={artist.image}
                  alt={artist.name}
                />
                <h4 className="text-white truncate p-2">{artist.name}</h4>
              </div>
            ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ArtistSlider;
