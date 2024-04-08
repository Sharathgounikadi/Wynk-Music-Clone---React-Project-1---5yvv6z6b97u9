import React, { useState, useEffect } from "react";
import "./Footer.css";
import LogoImage from "../../assets/images/logo.png";
import PlayStoreImage from "../../assets/images/ps.jpg";
import AppStoreImage from "../../assets/images/as.jpg";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowFooter(!(location.pathname === "/subscription" || location.pathname === "/search"));
  }, [location]);

  return (
    <footer className={`footer bg-[#0C0F12] ${showFooter ? 'flex' : 'hidden'}`}>
      <div className="w-full flex py-3 mb-8 border border-none rounded-lg bg-[#21252D] md:flex md:justify-between md:items-center">
        <img src={LogoImage} alt="Wynk Music Logo" className="h-16 ml-8" />
        <h2 className="-ml-80">Best Way to Listen to Music!
          <p>Don’t forget to install Wynk Music on your mobile phones</p>
        </h2>
        <div className="download-links flex items-center mr-8">
          <a href="https://play.google.com/store/search?q=wynk+music&c=apps" className="download-link" target="_blank" rel="noopener noreferrer">
            <img src={PlayStoreImage} alt="Download on Google Play Store" />
          </a>
          <a href="https://apps.apple.com/in/app/wynk-music-songs-podcasts/id845083955" className="download-link" target="_blank" rel="noopener noreferrer" >
            <img src={AppStoreImage} alt="Download on App Store" />
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

      {/* Other sections here... */}

      <div className=" w-full">
        <div className="py-4 px-4 border-gray-700 border-t border-b md:flex md:justify-between md:items-center">
          <ul className="dark:text-white text-sm font-medium uppercase flex flex-wrap justify-center">
            <li><a className="cursor-pointer" href="/about">About Us</a><span className="px-2 font-normal text-gray-500">|</span></li>
            <li><a title="Privacy Policy" href="/privacy_policy">Privacy Policy</a><span className="px-2 font-normal text-gray-500">|</span></li>
            <li><a title="Terms of Use" href="/terms">Terms of Use</a><span className="px-2 font-normal text-gray-500">|</span></li>
            <li><a className="cursor-pointer" href="/contact">Contact Us</a><span className="px-2 font-normal text-gray-500">|</span></li>
            <li><a className="Hellotunes" href="/hellotunes">Hellotunes</a></li>
          </ul>
          <div className="flex justify-center mt-8 md:mt-0">
            <a className="rounded-full h-10 w-10 border mr-4 flex items-center justify-center" href="https://www.facebook.com/WynkMusic" target="_blank" rel="noopener noreferrer noindex" title="Facebook">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>
            <a title="Twitter" className="rounded-full h-10 w-10 border mr-4 flex items-center justify-center" href="https://twitter.com/WynkMusic" target="_blank" rel="noopener noreferrer noindex">
              <i className=" dark:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>
            <a title="Instagram" className="rounded-full h-10 w-10 mr-4 border flex items-center justify-center" href="https://www.instagram.com/wynkmusic" target="_blank" rel="noopener noreferrer noindex">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
            <a title="YouTube" className="rounded-full h-10 w-10 border flex items-center justify-center" href="https://www.youtube.com/channel/UC3uWLPqsBOlYS6FLhWYwxJg" target="_blank" rel="noopener noreferrer noindex">
              <i className="dark:text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </i>
            </a>
          </div>
        </div>
        <div className="text-xs text-center py-4 px-4 md:flex md:items-start md:justify-between ">
          <p className="md:w-2/3 text-center md:text-left">
            Wynk Music is the one-stop music app for the latest to the greatest songs that you love. Play your favourite music online for free or download mp3. Enjoy from over 22 Million Hindi, English, Bollywood, Regional, Latest, Old songs and more.
          </p>
          <p className="mt-4 md:w-1/3 text-center md:text-right md:mt-0 whitespace-nowrap">
            © 2024 All rights reserved | Airtel Digital Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
