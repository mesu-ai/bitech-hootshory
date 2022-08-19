import React from 'react';
import ExploreButton from '../atoms/ExploreButton';
import Profile from '../atoms/Profile';
import StoryTime from '../atoms/StoryTime';
import StoryHeading from './StoryHeading';

const ShortStoryCard = ({ story }) => {
  
	return (
		<div>
			<StoryHeading story={story} />
		</div>
			
	);
};

export default ShortStoryCard;
