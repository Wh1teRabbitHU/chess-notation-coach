import React from 'react';

import { ReactChildrenType } from '../../../models/common/react-children';

import './menu.scss';

interface MenuProps {
	children: ReactChildrenType;
}

const Menu = ({ children }: MenuProps) => {
	return <ul className='menu'>{children}</ul>;
};

export default Menu;
