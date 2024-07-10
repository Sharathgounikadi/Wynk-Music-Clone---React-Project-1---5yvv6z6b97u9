import React, { useState } from 'react'; 
import ProtectedRoute from './components/Authentication/ProtectedRoute'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import Subscription from './components/Subscription/Subscription';
import AuthModal from './components/Authentication/AuthModal';
import MyMusic from './components/Music/MyMusic';
import TrendingNow from './components/Header/TrendingNow';
import SongCard from './components/Header/SongCard';
import Header from './components/Header/Header';
import Search from './components/Navbar/Search';
import UnderMaintenance from './components/Common/UnderMaintenance';
import CustomArtists from './components/Header/CustomArtists';
import SongList from './components/Common/SongList';
import TopHindiAlbums from './components/Albums/TopHindiAlbums'; 
import TopBhojpuriAlbums from './components/Albums/TopBhojpuriAlbums';
import TopTamilAlbums from './components/Albums/TopTamilAlbums';
import TopEnglishAlbums from './components/Albums/TopEnglishAlbums';
import TopTeluguAlbums from './components/Albums/TopTeluguAlbums';
const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AuthModal" element={<AuthModal />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/trending" element={<TrendingNow />} />
        <Route path="/artist" element={<CustomArtists />} />
        <Route path="/albums/hindi" element={<TopHindiAlbums />} />
        <Route path="/albums/english" element={<TopEnglishAlbums />} />
        <Route path="/albums/telugu" element={<TopTeluguAlbums />} />
        <Route path="/albums/tamil" element={<TopTamilAlbums/>} />
        <Route path="/albums/bhojpuri" element={<TopBhojpuriAlbums />} />
        <Route path="/songlist/:mood" element={<SongList setCurrentSong={setCurrentSong} />} />
        <Route path="/songs/:category" element={<SongCard />} />
        <Route path="/mymusic" element={<ProtectedRoute component={MyMusic} />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/selectlanguage" element={<UnderMaintenance />} />  
        <Route path="/selectsound" element={<UnderMaintenance />} /> 
        <Route path="/podcast" element={<UnderMaintenance />} />
        <Route path='/Maintenance' element={<UnderMaintenance/>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
