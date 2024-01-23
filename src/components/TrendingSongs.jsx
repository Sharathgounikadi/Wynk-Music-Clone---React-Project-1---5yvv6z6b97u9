import React from 'react'
import logo from '../assets/images/logo.png'

const TrendingSongs = () => {
    return (
            <div class="flex md:block md:w-3/12 items-center">
                <div class="lg:w-3/4 sm:w-4/5 w-1/3 sm:mr-2 mr-4 max-w-[16rem]">
                    <img src={logo} alt="Trending in Hindi"/>
                </div>            
                <div>
                    <h1 class="heading1">Trending in Hindi</h1>
                </div>
            </div>
    )
}

export default TrendingSongs