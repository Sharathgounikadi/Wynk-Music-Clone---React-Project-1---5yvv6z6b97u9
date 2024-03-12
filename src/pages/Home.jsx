import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header.jsx'
import ArtistCard from '../components/Artist/ArtistCard.jsx'
import NewRelease from '../components/Songs/NewRelease.jsx'
import MoodSongs from '../components/Songs/MoodSongs.jsx'
import TrendingSongs from '../components/Songs/TrendingSongs.jsx'
import Top20ThisWeek from '../components/Songs/Top20ThisWeek.jsx'
import SoulSoother from '../components/Songs/SoulSoother.jsx'
import EvergreenMelodies from '../components/Songs/EvergreenMelodies.jsx'
import Top50ThisMonth from '../components/Songs/Top50ThisMonth.jsx'
import HindiTop20 from '../components/Songs/HindiTop20.jsx'


const Home = () => {

  return (
    <div>
      <Header />
      <Carousel />
      <NewRelease />
      <TrendingSongs />
      <MoodSongs />
      <ArtistCard />
      <Top20ThisWeek />
      <HindiTop20 />
      <SoulSoother />
      <EvergreenMelodies />
      <Top50ThisMonth />
    </div>
  )
}

export default Home