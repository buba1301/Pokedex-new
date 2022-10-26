import React from 'react';
import LeftSection from '../../components/LeftSection';
import Paralax from '../../components/Paralax';

const Home = () => {
  console.log('RENDER HOME');
  return (
    <main>
      <LeftSection />
      <Paralax />
    </main>
  );
};

export default Home;
