import React from 'react';

const SelectedCard = ({ player, removePlayer }) => {
	console.log(player);

	const handleRemove = () => {
		removePlayer(player);

	}

	return (
		<div className='border-2 border-gray-100 flex justify-between items-center rounded-xl p-4 mt-4'>
			<div className='flex items-center'>
				<div>
					<img className='h-[50px] w-[50px] rounded-xl ' src={player.player_image} alt="" />
				</div>
				<div className='m-2'>
					<h1>{player.player_name}</h1>
					<p className='text-xs'>{player["bating style"]}</p>
				</div>
			</div>
			<div onClick={handleRemove}>
				<img src="https://i.ibb.co.com/ymw6brzn/Vector.png" alt="" />
			</div>
		</div>
	);
};

export default SelectedCard;