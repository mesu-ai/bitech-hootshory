import React from 'react';
import ExploreButton from '../atoms/ExploreButton';
import Profile from '../atoms/Profile';
import StoryTime from '../atoms/StoryTime';

const LongStoryCard = ({ story }) => {

  console.log(story?.hashtags);
  
	return (
		<div className='grid grid-cols-4 gap-3'>
			<div className='col-span-3'>
				<p className='text-2xl font-bold'>
          {story?.title}

				</p>
				<div className='flex justify-between mt-4'>
					<Profile photo={story?.author?.profileImage} name={story?.author?.name} />
					<ExploreButton />
				</div>

        <div className='flex space-x-5 mt-5'>
        <StoryTime create={story?.created} read={story?.readTime}/>
        <p className='truncate'>{story?.hashtags}</p>

        </div>
        

			</div>

			<div>
				<img src={story?.coverImage2} alt='' />
			</div>
		</div>
	);
};

export default LongStoryCard;
