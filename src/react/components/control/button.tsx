import React from 'react';
import { useNavigate } from 'react-router-dom';

import './button.scss';

interface ButtonProps {
	text: string;
	target?: string;
	onClick?: () => void;
}

const Button = ({ text, target, onClick }: ButtonProps) => {
	let onClickFn;

	const navigate = useNavigate();

	if (typeof target != 'undefined') {
		onClickFn = () => {
			navigate(`${target + location.search}`);

			onClick?.();
		};
	} else {
		onClickFn = onClick;
	}

	return (
		<button className='btn' onClick={onClickFn}>
			{text}
		</button>
	);
};

export default Button;
