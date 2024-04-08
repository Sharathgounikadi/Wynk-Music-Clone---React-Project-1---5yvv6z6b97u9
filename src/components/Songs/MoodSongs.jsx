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
    const [data, setData] = useState([]);
    const [happy, sethappy] = useState([]);
    const [sad, setsad] = useState([]);
    const [excited, setexcited] = useState([]);
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
                setData(response.data.data);
                const happyArray = response.data.data.filter(item => item.mood === "happy");
                sethappy(happyArray);

                const sadArray = response.data.data.filter(item => item.mood === "sad");
                setsad(sadArray);

                const excitedArray = response.data.data.filter(item => item.mood === "excited");
                setexcited(excitedArray);

                const romanticArray = response.data.data.filter(item => item.mood === "romantic");
                setromantic(romanticArray);
            } catch (error) {
                console.error('Error fetching data:', error);
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

    const  MusicList = (data) => {
        if(data === 'happy'){
            navigate('/playlist/happy', { state: { data: happy } });
        }if(data === 'sad'){
            navigate('/playlist/sad', { state: { data: sad } });
        }
        if(data === 'excited'){
            navigate('/playlist/excited', { state: { data: excited } });
        }
        if(data === 'romantic'){
            navigate('/playlist/romantic', { state: { data: romantic } });
        }
        
    }
    

    return (
        <div className='mx-8 px-10'>
            <h2 className='text-2xl text-white pl-3'>Moods {mood}</h2>
            <div className='h-full w-full pt-4 py-4 rounded-full'>
                <Slider {...settings}>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]' 
                        onClick={()=>{MusicList('happy') }}>
                        <img className='rounded-md h-full w-full' src={Happy} alt="Happy Songs" />
                        <h4 className='text-white truncate p-2'>Happy Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                    onClick={() => MusicList('excited')}>
                        <img className='rounded-md h-full w-full' src={Excited} alt="Excited Songs" />
                        <h4 className='text-white truncate p-2'>Excited Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('romantic')}}>
                        <img className='rounded-md h-full w-full' src={Romantic} alt="Romantic Songs" />
                        <h4 className='text-white truncate p-2'>Romantic Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('sad')}}>
                        <img className='rounded-md h-full w-full' src={Sad} alt="Sad Songs" />
                        <h4 className='text-white truncate p-2'>Sad Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={()=>{MusicList('happy')}}>
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
