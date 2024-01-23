import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/images/logo.png";
import PS from "../assets/images/ps.jpg"
import AS from "../assets/images/as.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-[#0C0F12]">
      <div className="p-6 border border-solid border-gray-300 rounded-lg bg-transparent mb-10 ">
        <div className="font-bold text-lg">
        <h2>About Wynk Music
        <p>
          Wynk Music is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing
          that can truly understand a person, we consistently offer our
          audience the ideal blend of MP3 Songs by their favourite artists and
          of versatile genres.
        </p>
        </h2>

        <h2>Play & Download FREE MP3 Songs in all languages
        <p>
          One of the unique features of Wynk Music is that it offers users the
          ability to stream music in multiple regional languages, including
          Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
          app can download MP3 songs for offline listening. This online music
          platform provides access to additional features such as offline
          listening, high-quality audio, and exclusive content.
        </p>
        </h2>

        <h2>Wynk Music – One Stop Destination for Offline & Online Music!
        <p>
          Wynk Music offers users access to a vast library of music, including
          Indian and international tracks across various genres like
          Bollywood, Punjabi, pop, rock, and more. We have made online music
          streaming simple, fun, and all about you! So, what’s the wait for,
          discover and listen to millions of songs, playlists, podcasts &
          download MP3 songs on any device including mobile for free
          exclusively on Wynk Music. Keep Wynking!
        </p>
        </h2>
        </div>
      </div>

      <div className="w-full flex py-3 mb-8 border border-none rounded-lg bg-[#21252D] md:flex md:justify-between md:items-center">
        <img src={Logo} alt="img" className="h-16 ml-8" />
        <h2 className="-ml-80">Best way to Listen to Music!
          <p>Don’t forget to install Wynk Music on your mobile phones</p>
        </h2>
        <div className="download-links flex items-center mr-8">
          <a href="https://play.google.com/store/search?q=wynk+music&c=apps" className="download-link" target="_blank" rel="noopener noreferrer">
            <img src={PS} alt="Android Download" />
          </a>
          <a href="https://apps.apple.com/in/app/wynk-music-songs-podcasts/id845083955" className="download-link" target="_blank" rel="noopener noreferrer" >
            <img src={AS} alt="iOS Download" />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h2>LATEST SONGS</h2>
        <p>
          Sarkaare | Keemti | Sab Rab | In Your Eyes Only | Aankhon Mein |
          Manmaani | JALSA 2.0 | Oonchi Oonchi Deewarein (From "Yaariyan 2") | O
          Piya | Doriyaan | Khidkiyaan | Mann Jogiya (From "Pyaar Hai Toh Hai")
          | Jaanu Na | Legacy | Jeetenge
        </p>
      </div>

      <div className="footer-section">
        <h2>REGIONAL PLAYLISTS</h2>
        <p>
          New Bengali Songs | New Bhojpuri Songs | New English Songs | New
          Haryanvi Songs | New Hindi Songs | New Kannada Songs | New Marathi
          Songs | New Punjabi Songs | New Tamil Songs | New Telugu Songs | New
          Odia Songs | New Rajasthani Songs | New Gujarati Songs | New Assamese
          Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>TRENDING SONGS</h2>
        <p>
          Chaleya (From "Jawan") | Heeriye (feat. Arijit Singh) | Zihaal e
          Miskin | Haanji (From "Thank You For Coming") | Gone Girl | Yaar Ka
          Sataya Hua Hai | Phir Aur Kya Chahiye (From "Zara Hatke Zara Bachke")
          | Apna Bana Le | Guli Mata | Kya Loge Tum | Tum Kya Mile (From "Rocky
          Aur Rani Kii Prem Kahaani") | Dil Jhoom | Hukum - Thalaivar Alappara
          (From "Jailer") | Kesariya (From "Brahmastra") | Jaana Hai Toh Jaa
        </p>
      </div>

      <div className="footer-section">
        <h2>TOP ARTISTS</h2>
        <p>
          Guru Randhawa | Arijit Singh | Atif Aslam | Justin Bieber | Gulzar |
          Armaan Malik | Sidhu Moose Wala | Alan Walker | Udit Narayan | Sonu
          Nigam | Sid Sriram | Akhil | Darshan Raval | Shreya Ghoshal | Alka
          Yagnik
        </p>
      </div>

      <div className="footer-section">
        <h2>LATEST ALBUMS</h2>
        <p>
          Scarlet | Yaariyan 2 | Vikram Original Motion Picture Soundtrack |
          Shubh Vivah | Thallumaala | Pushpa - The Rise | Ninna Sanihake |
          Praktan | No Name | Bhavartha Mauli | Yuva Sarkar | Mal mahu jiban
          mati | GUTS
        </p>
      </div>

      <div className="footer-section">
        <h2>EXPLORE MUSIC GENRES</h2>
        <p>
          Rock Songs | Patriotic songs | Sufi Music | Ghazals | Workout Music |
          Devotional Songs | Sad Songs | DJ Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>OLD SONGS</h2>
        <p>
          Old Songs | Old Hindi Songs | Old English Songs | Old Punjabi Songs |
          Old Telugu Songs | Old Tamil Songs | Old Bengali Songs | Old Malayalam
          Songs | Old Kannada Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>SONGS WITH LYRICS</h2>
        <p>
          Coca Cola | Bom Diggy Diggy | Machayenge | Tera Yaar Hoon Main | Kar
          Gayi Chull (From "Kapoor & Sons (Since 1921)") | Morni Banke | Chalti
          Hai Kya 9 Se 12 | Hawayein
        </p>
      </div>

      <div className="footer-section">
        <h2>WYNK TOP HITS</h2>
        <p>
          Top 20 Bollywood Songs | Wynk Top 100 Songs | Top 20 English Songs |
          Trending Reels Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>DEVOTIONAL SONGS</h2>
        <p>
          Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | Shiv
          Bhajan | Gurbani | Gurbani Shabad | Islamic Songs | Jesus Songs |
          Christian Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>JOIN WYNK FOR ARTISTS</h2>
        <p>Wynk Studio | Wynk Studio for Artists</p>
      </div>

      <div className=" w-full">
        <div className="py-4 px-4 border-gray-700 border-t border-b md:flex md:justify-between md:items-center">
          <ul className="dark:text-white text-sm font-medium uppercase flex flex-wrap justify-center">
            <li><a className="cursor-pointer" href="/corporate">About Us</a>
              <span className="px-2 font-normal text-gray-500">|</span>
            </li>
            <li><a title="Privacy Policy" href="/music/privacy_policy">Privacy Policy</a>
              <span className="px-2 font-normal text-gray-500">|</span>
            </li>
            <li><a title="Terms of Use" href="/music/tnc">Terms of Use</a>
              <span className="px-2 font-normal text-gray-500">|</span>
            </li>
            <li><a className="cursor-pointer" href="/corporate/contact">Contact Us</a>
              <span class="px-2 font-normal text-gray-500">|</span></li>
            <li><a className="Hellotunes" href="/airtel-hellotunes">Hellotunes</a>
            </li>
          </ul>
          <div className="flex justify-center mt-8 md:mt-0">
            <a className="rounded-full h-10 w-10 border mr-4 flex items-center justify-center"
              href="https://www.facebook.com/WynkMusic" target="_blank" rel="noopener noreferrer noindex"
              title="Facebook">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </i></a>
            <a title="Twitter" className="rounded-full h-10 w-10 border mr-4 flex items-center justify-center"
              href="https://twitter.com/WynkMusic" target="_blank" rel="noopener noreferrer noindex">
              <i className=" dark:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </i></a>
            <a title="Instagram" className="rounded-full h-10 w-10 mr-4 border flex items-center justify-center"
              href="https://www.instagram.com/wynkmusic" target="_blank" rel="noopener noreferrer noindex">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </i></a>
            <a title="YouTube" className="rounded-full h-10 w-10 border flex items-center justify-center"
              href="https://www.youtube.com/channel/UC3uWLPqsBOlYS6FLhWYwxJg"
              target="_blank" rel="noopener noreferrer noindex">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </i>
            </a>
          </div>
        </div>

        <div className="text-xs text-center py-4 px-4 md:flex md:items-start md:justify-between ">
          <p class="md:w-2/3 text-center md:text-left">
            Wynk Music is the one-stop music app for the latest to the greatest songs that you love.
            Play your favourite music online for free or download mp3.
            Enjoy from over 22 Million Hindi, English, Bollywood,
            Regional, Latest, Old songs and more.</p>
          <p class="mt-4 md:w-1/3 text-center md:text-right md:mt-0 whitespace-nowrap">
            © 2024 All rights reserved | Airtel Digital Limited
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
