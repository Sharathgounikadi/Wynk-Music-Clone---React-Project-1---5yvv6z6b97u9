import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header.jsx'
import MusicCard from '../components/MusicCard.jsx'
import ArtistCard from '../components/ArtistCard.jsx'
import NewRelease from '../components/NewRelease.jsx'
import MoodSongs from '../components/MoodSongs.jsx'

const Home = () => {

  return (
    <div>
      <Header />
      <Carousel />
      <NewRelease />
      <MoodSongs />
      <MusicCard/>
      <MusicCard/>
      <MusicCard/>
      <ArtistCard />
    </div>
  )
}

export default Home