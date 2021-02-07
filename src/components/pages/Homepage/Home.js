import React from 'react';
import HeroSection from '../../HeroSection';
import Footer from '../Footer/Footer';
import Page from '../page/Page';
import { homeObjOne, homeObjTwo, homeObjThree, pageRowOne,pageRowTwo } from './Data';
import Homepage from './Homepage';
import './Home.css'



function Home() {
  return (
    <>
    <div className='home'>
      <Homepage />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Page {...pageRowOne}{...pageRowTwo}/>
      <Footer />
      </div>
    </>
  );
}

export default Home;