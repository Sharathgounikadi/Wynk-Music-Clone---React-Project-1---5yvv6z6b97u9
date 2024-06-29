import React from 'react'
import Carousel from '../components/Carousel'
import ArtistSlider from '../components/Artists/ArtistSlider.jsx'
import NewRelease from '../components/Songs/NewRelease.jsx'
import MoodSongs from '../components/Songs/MoodSongs.jsx'
import TrendingSongs from '../components/Songs/TrendingSongs.jsx'
import Top20ThisWeek from '../components/Songs/Top20ThisWeek.jsx'
import SoulSoother from '../components/Songs/SoulSoother.jsx'
import EvergreenMelodies from '../components/Songs/EvergreenMelodies.jsx'
import Top50ThisMonth from '../components/Songs/Top50ThisMonth.jsx'
import HindiTop20 from '../components/Songs/HindiTop20.jsx'
import MusicPlayer from '../components/Music/MusicPlayer.jsx'
import { useUser } from '../utils/UserProvider.jsx'
import About from '../components/Footer/About.jsx'


const Home = () => {
  const {currentSong}=useUser();

  return (
    <div>
      <Carousel />
      <NewRelease />
      <TrendingSongs />
      <MoodSongs />
      <ArtistSlider />
      <Top20ThisWeek />
      <HindiTop20 />
      <SoulSoother />
      <EvergreenMelodies />
      <Top50ThisMonth />
      <About />
      {currentSong && <MusicPlayer/>}
    </div>
  )
}

export default Home