// ArtistCard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { PROJECT_ID } from '../../utils/constant';

const ArtistCard = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/album", {
          method: 'GET',
          headers: {
            projectId: PROJECT_ID,
          },
        });
        setdata(prevData => [...prevData, ...response.data.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  var settings = {
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
      <h2 className='text-2xl text-white pl-3'>Top Indie Artists</h2>
      <div className='h-full w-full pt-4 py-4 '>
        <Slider {...settings}>
          {data.map((album) => (
            album.artists.map((artist) => (
              <div key={artist._id}>
                <img className='rounded-full h-full w-full' src={artist.image} alt={artist.name} />
                <h4 className='text-white truncate p-2'>{artist.name}</h4>
              </div>
            ))
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArtistCard;
