import React from 'react';
import ExploreButton from '../atoms/ExploreButton';
import Profile from '../atoms/Profile';
import StoryTime from '../atoms/StoryTime';

const ShortStoryCard = ({ story }) => {
  
	return (
		<div className='grid grid-cols-4 gap-3'>
			<div className='col-span-3'>
				<p className='text-xl font-bold'>
					This text is for our article title, sometime it should be long as like this
				</p>
				<div className='flex justify-between'>
					<Profile photo={story?.author?.profileImage} name={story?.author?.name} />
					<ExploreButton />
				</div>
        <StoryTime create={story?.created} read={story?.readTime}/>

			</div>

			<div>
				<img src={story?.coverImage} alt='' />
			</div>
		</div>
	);
};

export default ShortStoryCard;
