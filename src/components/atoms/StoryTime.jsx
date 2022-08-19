import React from 'react';

const StoryTime = ({create,read}) => {
  return (
    <div>
      <span>{create}</span>
      <span>| {read} read</span>
    </div>
  );
};

export default StoryTime;