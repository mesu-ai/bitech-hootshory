import React from 'react';
import { communities } from '../../data/data';
import CommunityCard from '../molecules/CommunityCard';

const AmazingCommunity = () => {
  return (
    <div className='py-8'>
      <p className='font-bold text-2xl text-white mb-4'>Amazing communities to follow</p>

      
      {communities.map((user,index)=><CommunityCard key={index} user={user}/>)}



      
    </div>
  );
};

export default AmazingCommunity;