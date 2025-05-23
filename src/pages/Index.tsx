
import React from 'react';
import Hero from '../components/Hero';
import Discography from '../components/Discography';
import Timeline from '../components/Timeline';
import BestAlbums from '../components/BestAlbums';
import BestBars from '../components/BestBars';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <BestAlbums />
      <Discography />
      <Timeline />
      <BestBars />
      <Footer />
    </div>
  );
};

export default Index;
