import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { PROJECT_ID } from '../../utils/constant';

const ArtistSlider = () => {
  const [artistData, setArtistData] = useState([]); // State to store artist data

  useEffect(() => {
    // Function to fetch artist data from the API
    const fetchArtistData = async () => {
      try {
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/album", {
          headers: {
            projectId: PROJECT_ID, // Use project ID from constants
          },
        });
        // Append fetched data to the existing state
        setArtistData(prevArtistData => [...prevArtistData, ...response.data.data]);
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mx-8 px-10'>
      <h2 className='text-2xl text-white pl-3'>Top India Artists</h2>
      <div className='h-full w-full pt-4 py-4'>
        <Slider {...sliderSettings}>
          {artistData.map((album) => (
            album.artists.map((artist) => (
              <div key={artist._id}>
                <img className='rounded-full h-[160px] w-[160px]' src={artist.image} alt={artist.name} />
                <h4 className='text-white truncate p-2'>{artist.name}</h4>
              </div>
            ))
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArtistSlider;
