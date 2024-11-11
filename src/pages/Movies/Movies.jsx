import React from 'react';
import './Movies.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Movies = () => {
  return (
    <div className='movies'>
      <Navbar />
      
      <div className='more-cards'>
        <TitleCards title={"Blockbuster Hits"} category={"top_rated"} />
        <TitleCards title={"Popular Movies"} category={"popular"} />
        <TitleCards title={"Coming Soon"} category={"upcoming"} />
        <TitleCards title={"Movies You'll Love"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
