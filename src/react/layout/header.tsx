import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img src='./assets/black_king.png' />
			</div>
			<div className='navigator'>
				<span className='element'>
					<Link to={'/'}>Main</Link>
				</span>
				<span className='element'>
					<Link to={'/games/time-trial'}>Time Trial</Link>
				</span>
			</div>
		</div>
	);
};

export default Header;
