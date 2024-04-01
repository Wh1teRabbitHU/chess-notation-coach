import React from 'react';

import { ReactChildrenType } from '../../models/common/react-children';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
	children: ReactChildrenType;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='application-container'>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
