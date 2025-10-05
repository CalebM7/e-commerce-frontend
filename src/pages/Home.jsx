import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';

const Home = () => {
  return (
    // This is a simple div. It should respect the padding from App.jsx
    <div>
      <Hero />
      <LatestCollection />
    </div>
  );
};

export default Home;
