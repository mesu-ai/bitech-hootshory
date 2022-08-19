import React from 'react';
import Profile from '../atoms/Profile';

const CommunityCard = ({user}) => {
  return (
    <div className='bg-grayOffwhite mt-4 rounded-lg p-5'>
      <Profile className='text-white' name={user?.name} photo={user?.profileImage}
       bio={user?.bio} stories={user?.summary?.stories} followers={user?.summary?.followers}/>
      
    </div>
  );
};

export default CommunityCard;