import React from 'react';
import './Tvshows.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const TVShows = () => {
  return (
    <div className='tvshows'>
      <Navbar />
      
      <div className='more-cards'>
        {/* <div>
        <TitleCards title={"Top Rated TV Shows"} category={"top_rated"} contentType={"tv"} />
        </div> */}
       
      <TitleCards title={"Top Rated TV Shows"} category={"top_rated"} contentType={"tv"} />
      <TitleCards title={"Trending Now"} category={"popular"} contentType={"tv"} />
      <TitleCards title={"Airing Today"} category={"airing_today"} contentType={"tv"} />
      <TitleCards title={"On the Air"} category={"on_the_air"} contentType={"tv"} />
      </div>
      <Footer />
    </div>
  );
}

export default TVShows;
