import React from 'react';

const Profile = ({
	className = '',
	photo,
	name = '',
	bio = '',
	stories = '',
	authors = '',
	followers = '',
}) => {
	return (
		<div className='grid grid-cols-12'>
			<div className='col-span-1'>
			<img src={photo} alt=''  />
			</div>
			<div className='col-span-10 ml-4 font-medium text-lg w-full'>
				<div className='flex justify-between '>
					<div className='space-x-2'>
						<span className={` ${className}`}>{name}</span>
						{stories && <span className=' text-gray-400'>{stories} Stories</span>}
						{authors && <span className=' text-gray-400'>{authors} Authors</span>}
					</div>
					<div>
						{followers && (
							<>
								<span className=' text-gray-400 mr-3'>{followers} Followers</span>
								<button className='text-blue-500'>Follow</button>
							</>
						)}
					</div>
				</div>
				<p className='text-gray-500 w-3/6 truncate'>{bio}</p>
			</div>
		</div>
	);
};

export default Profile;
