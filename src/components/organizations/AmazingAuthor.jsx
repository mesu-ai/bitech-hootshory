import React from 'react';
import { users } from '../../data/data';
import AuthorCard from '../molecules/AuthorCard';

const AmazingAuthor = () => {
  return (
    <div className='py-8'>
      <p className='font-bold text-2xl text-white mb-4'>Amazing authors to follow</p>

      
      {users.map((user,index)=><AuthorCard key={index} user={user}/>)}



      
    </div>
  );
};

export default AmazingAuthor;