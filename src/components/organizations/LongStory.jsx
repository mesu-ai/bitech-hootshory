import React from 'react';
import { stories } from '../../data/data';
import LongStoryCard from '../molecules/LongStoryCard';

const LongStory = () => {
  const longStories = stories.filter((story) => story.type === 'long');

	return (
		<div className='bg-white rounded-xl p-5 mt-10'>
			{longStories &&
       longStories.map((story,index)=><LongStoryCard key={index} story={story}/>)
      }
			
		</div>
  );
};

export default LongStory;