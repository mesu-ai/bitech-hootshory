import React from 'react';
import explore from '../../assets/explore.png';

const ExploreButton = () => {
  return (
    <button className='flex space-x-2'>
      <img src={explore} alt="" />
      <p>Travel for explore</p>
    </button>
  );
};

export default ExploreButton;