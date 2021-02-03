import React from 'react';
import HeroSection from '../../HeroSection';
import Footer from '../Footer/Footer';
import Page from '../page/Page';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import Homepage from './Homepage';
import './Home.css'
//import Pricing from '../../Pricing';


function Home() {
  return (
    <>
    <div className='home'>
      <Homepage />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjFour} /> */}
      <Page />
      <Footer />
      </div>
    </>
  );
}

export default Home;