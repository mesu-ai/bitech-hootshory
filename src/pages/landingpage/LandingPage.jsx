import React from 'react';
import AmazingAuthor from '../../components/organizations/AmazingAuthor';
import AmazingCommunity from '../../components/organizations/AmazingCommunity';
import LongStory from '../../components/organizations/LongStory';
import ShortStory from '../../components/organizations/ShortStory';

const LandingPage = () => {
  return (
    <div className='container mx-auto'>
      <LongStory/>
      <AmazingAuthor/>
      <LongStory/>
      <AmazingCommunity/>
      <ShortStory/>
      
      
    </div>
  );
};

export default LandingPage;