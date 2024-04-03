import React from 'react';

import { ReactChildrenType } from '../../../models/common/react-children';

interface IfProps {
	condition: boolean;
	children: ReactChildrenType;
}

const If = ({ condition, children }: IfProps) => {
	return condition ? <React.Fragment>{children}</React.Fragment> : <React.Fragment></React.Fragment>;
};

export default If;
