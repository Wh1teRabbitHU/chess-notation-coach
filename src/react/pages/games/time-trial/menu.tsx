import React from 'react';

import Menu from '../../../components/menu/menu';
import MenuItem from '../../../components/menu/menu-item';

const TimeTrialMenuPage = () => {
	return (
		<div className='time-trial-menu'>
			<Menu>
				<MenuItem label='New game' url='/time-trial/new-game' />
				<MenuItem label='Highscore' url='/time-trial/highscore' />
				<MenuItem label='Help' url='/time-trial/help' />
			</Menu>
		</div>
	);
};

export default TimeTrialMenuPage;
