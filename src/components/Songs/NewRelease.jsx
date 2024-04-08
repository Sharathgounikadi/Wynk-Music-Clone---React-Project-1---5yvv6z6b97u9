import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Slider from 'react-slick';
import { PROJECT_ID } from '../../utils/constant';
import { useUser } from '../../utils/UserProvider';

const NewRelease = () => {
  const { setCurrentSong, currentSong } = useUser();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
          headers: {
            projectId: PROJECT_ID,
          },
          params: {
            sort: '{"release":1}',
          },
        });
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
    <div className='mx-8 px-10'>
      <h2 className='text-2xl text-white pl-3'>New Release</h2>
      <Slider {...settings}>
        {data.map((song) => (
          <div key={song._id} className='h-44 w-44 rounded-[40px] mt-3 focus:outline-none' onClick={() => handleClickSong(song)}>
            <img className='rounded-md h-full w-full' src={song.thumbnail} alt={song.title} />
            <h4 className='text-white truncate p-2'>{song.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewRelease;
