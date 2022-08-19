import React from 'react';
import ExploreButton from '../atoms/ExploreButton';
import Profile from '../atoms/Profile';
import StoryTime from '../atoms/StoryTime';
import StoryHeading from './StoryHeading';

const LongStoryCard = ({ story }) => {
	// const time=`${story?.created}`;
	// console.log(time);

	// console.log(`${story?.created}`.split("|").shift());

	return (
		<div className=''>
			<StoryHeading story={story} />

			<div className='bg-white mt-5 p-5 rounded-xl'>
				<img className='w-full' src={story?.coverImage1} alt='' />
				<p className='text-gray-600 text-lg mt-3'>{story?.content}</p>
        
				<div className='flex justify-between mt-7'>
					<Profile photo={story?.author?.profileImage} name={story?.author?.name} />
					<StoryTime create={`, ${story?.created}`.split("|").reverse()}/>
					<ExploreButton />
				</div>
			</div>
		</div>
	);
};

export default LongStoryCard;
