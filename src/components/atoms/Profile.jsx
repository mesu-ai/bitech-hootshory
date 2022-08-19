import React from 'react';

const Profile = ({photo,name}) => {
  return (
    <div className='flex items-center'>
      <img src={photo} alt="" />
      <p className='ml-4 font-medium'>{name}</p>
      
    </div>
  );
};

export default Profile;