import React from 'react';

const StoryTime = ({create,read}) => {
  return (
    <div className='text-grayWhite'>
      <span>{create}</span>
      {read && 
      <span>| {read} read</span>
      }
      
    </div>
  );
};

export default StoryTime;