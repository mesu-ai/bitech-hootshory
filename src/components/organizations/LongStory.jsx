import React from 'react';
import { stories } from '../../data/data';
import LongStoryCard from '../molecules/LongStoryCard';

const LongStory = () => {
  const longStories = stories.filter((story) => story.type === 'long');

	return (
		<div className=' mt-10 space-y-3'>
			{longStories &&
       longStories.slice(1).map((story,index)=><LongStoryCard key={index} story={story}/>)
      }

			
		</div>
  );
};

export default LongStory;