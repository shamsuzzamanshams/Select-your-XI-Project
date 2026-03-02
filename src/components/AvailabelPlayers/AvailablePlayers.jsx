import React, { use } from 'react';
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
	const playerData = use(playersPromise);
	console.log(playerData);

	return (
		<div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
			{
				playerData.map(player => <div className="card bg-base-100 shadow-sm p-4">
					<figure>
						<img
							src={player.player_image}
							alt="Shoes"
							className='w-full h-[300px] object-cover' />
					</figure>
					<div className="mt-4">
						<div className='flex'>
							<img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
						</div>
						<div className='flex justify-between mt-4 border-b-1 border-gray-100 pb-2'>
							<div className='flex items-center'>
								<img src={flagImg} alt="" className='w-[20px] h-[20px]' />
								<span className='ml-2 '>{player.player_country}</span>
							</div>
							<button className='btn'>{player.playing_role}</button>
						</div>

						<div className='flex justify-between font-bold'>
							<span>Rating</span>
							<span>{player.rating}</span>
						</div>
						<div className='flex justify-between mt-4'>
							<span className='font-bold'>{player["bating style"]}</span>
							<span>{player["bowling style"]}</span>
						</div>
						<div className="card-actions mt-4 flex justify-between items-center">
							<p className='font-bold'>{player.player_peice}</p>
							<button className="btn">Choose Player</button>
						</div>
					</div>
				</div>)
			}

		</div>
	);
};

export default AvailablePlayers;