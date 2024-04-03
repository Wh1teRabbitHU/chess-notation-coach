import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
	url: string;
	label: string;
}

const MenuItem = ({ url, label }: MenuItemProps) => {
	return (
		<li className='menu-item'>
			<Link to={url}>{label}</Link>
		</li>
	);
};

export default MenuItem;
