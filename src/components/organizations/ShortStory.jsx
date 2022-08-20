import React from 'react';
import { stories } from '../../data/data';
import ShortStoryCard from '../molecules/ShortStoryCard';

const ShortStory = () => {
	const shortStories = stories.filter((story) => story.type === 'short');

	return (
		<div className='bg-white rounded-xl p-5'>
			{shortStories &&
       shortStories.slice(-1).map((story,index)=><ShortStoryCard key={index} story={story}/>)
      }
			
		</div>
	);
};

export default ShortStory;
