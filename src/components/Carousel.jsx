import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GrNext } from "react-icons/gr";


const smallCarouselData = [
    {
        id: "1",
        name: "Data 1",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/650d78199b5f7a7e846f6eee/BANNER_31707535770392.jpeg",

    },
    {
        id: "2",
        name: "Data 2",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1695718015345-Full-Album-Mission-Raniganj-FeaturedBanner.jpg",
    },
    {
        id: "3",
        name: "Data 3",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/63e0af595eb058293f5e8e9b/BANNER_188225634537180.png",
    },
    {
        id: "4",
        name: "Data 4",
        longImage: " https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1695986036714-Fresh-Arrivals-FeaturedBanner_(8).jpg",

    },

    {
        id: "5",
        name: "Data 5",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e5b5cc9370c3260804bb49/BANNER_90822899840205.jpg",

    },
    {
        id: "6",
        name: "Data 6",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64c390dcc140c7113bd5e39d/BANNER_7435851371242.jpeg",
    },
    {
        id: "7",
        name: "Data 7",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1691404229878-Gadar-2-FeaturedBanner.jpg",

    },
    {
        id: "8",
        name: "Data 8",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e3126565e2492644597d64/BANNER_618767705707987.jpg",

    },
    {
        id: "9",
        name: "Data 9",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651687e052686f1067b0c8c7/BANNER_352050287144965.jpg",

    },
    {
        id: "10",
        name: "Data 10",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e5bdfe4152fe066bee4891/BANNER_22423922471317.png",
    },
    {
        id: "11",
        name: "Data 11",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651badc16ed4985d961a578e/BANNER_579213001452715.jpg",
    },
    {
        id: "12",
        name: "Data 12",
        longImage: "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e36d2e7834a419eacdc272/BANNER_249951858683914.jpg",
    },



]

const CarouselMulti = () => {
    const screenWidth = window.innerWidth;
    const slideNum = screenWidth > 640 ? 2 : 1
    const settings = {
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: slideNum,
        slidesToScroll: 1,
        nextArrow: <GrNext />,
        prevArrow: <GrNext />,
    };
    return (
        <div className='my-5 mx-auto w-[95%]'>
            <Slider {...settings}>
                {smallCarouselData.map((data) => (
                    <div key={data.id} className='h-[250px]  w-[250px] rounded'>
                        <div className='h-full w-full flex items-center justify-center bg-red-200 rounded-lg'>
                            <img src={data.longImage} alt='img' className='rounded-lg h-full w-full' />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselMulti