import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Sad from '../../assets/images/Sad.png'
import Happy from '../../assets/images/Happy.jpg'
import Excited from'../../assets/images/Excited.jpg'
import Romantic from '../../assets/images/Romantic.jpg'
import Dance from '../../assets/images/Dance.jpg'
import Party from '../../assets/images/Party.jpg'
import { PROJECT_ID } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const MoodSongs = ({ mood }) => {
    const [getData, setData] = useState([]);
    const [getHappy, sethappy] = useState([]);
    const [getSad, setsad] = useState([]);
    const [getExcited, setexcited] = useState([]);
    const [romantic, setromantic] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
                    method: 'GET',
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                setData(response.getData.getData);
                const happyArray = response.getData.getData.filter(item => item.mood === "getHappy");
                sethappy(happyArray);

                const sadArray = response.getData.getData.filter(item => item.mood === "getSad");
                setsad(sadArray);

                const excitedArray = response.getData.getData.filter(item => item.mood === "getExcited");
                setexcited(excitedArray);

                const romanticArray = response.getData.getData.filter(item => item.mood === "romantic");
                setromantic(romanticArray);
            } catch (error) {
                console.error('Error fetching getData:', error);
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

    const  MusicList = (getData) => {
        if(getData === 'getHappy'){
            navigate('/playlist/getHappy', { state: { getData: getHappy } });
        }if(getData === 'getSad'){
            navigate('/playlist/getSad', { state: { getData: getSad } });
        }
        if(getData === 'getExcited'){
            navigate('/playlist/getExcited', { state: { getData: getExcited } });
        }
        if(getData === 'romantic'){
            navigate('/playlist/romantic', { state: { getData: romantic } });
        }
        
    }
    

    return (
        <div className='mx-8 px-10'>
            <h2 className='text-2xl text-white pl-3'>Moods {mood}</h2>
            <div className='h-full w-full pt-4 py-4 rounded-full'>
                <Slider {...settings}>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]' 
                        onClick={()=>{MusicList('getHappy') }}>
                        <img className='rounded-md h-full w-full' src={Happy} alt="Happy Songs" />
                        <h4 className='text-white truncate p-2'>Happy Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                    onClick={() => MusicList('getExcited')}>
                        <img className='rounded-md h-full w-full' src={Excited} alt="Excited Songs" />
                        <h4 className='text-white truncate p-2'>Excited Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('romantic')}}>
                        <img className='rounded-md h-full w-full' src={Romantic} alt="Romantic Songs" />
                        <h4 className='text-white truncate p-2'>Romantic Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('getSad')}}>
                        <img className='rounded-md h-full w-full' src={Sad} alt="Sad Songs" />
                        <h4 className='text-white truncate p-2'>Sad Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('getHappy')}}>
                        <img className='rounded-md h-full w-full' src={Party} alt="Party Songs" />
                        <h4 className='text-white truncate p-2'>Party Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('romantic')}}>
                        <img className='rounded-md h-full w-full' src={Dance} alt="Dance Songs" />
                        <h4 className='text-white truncate p-2'>Dance Songs</h4>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default MoodSongs;
