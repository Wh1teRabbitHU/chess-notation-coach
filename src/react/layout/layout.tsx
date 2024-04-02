import React from 'react';

import { ReactChildrenType } from '../../models/common/react-children';
import Footer from './footer';
import Header from './header';

import './layout.scss';

interface LayoutProps {
	children: ReactChildrenType;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='application-container'>
			<Header />
			<div className='main-container'>
				<hr />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
