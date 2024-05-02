import React from 'react';
import { useNavigate } from 'react-router-dom';

import './button.scss';

interface ButtonProps {
	text: string;
	disabled?: boolean;
	target?: string;
	onClick?: () => void;
}

const Button = ({ text, disabled = false, target, onClick }: ButtonProps) => {
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
		<button className='btn' onClick={onClickFn} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
