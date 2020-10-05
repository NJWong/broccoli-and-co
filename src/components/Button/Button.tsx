/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
	text: string,
	action?: Function,
	disabled?: boolean,
}

const Button: React.FC<ButtonProps> = (props) => {
	const handleClick = () => {
		if (props.action) {
			props.action();
		}
	}

	return(
		<button
			css={styles}
			data-testid="button"
			onClick={handleClick}
			disabled={props.disabled}
		>
			{props.text}
		</button>
	);
}

const styles = css`
	outline: none;
	background-color: #5A67D8;
	color: #FFFFFF;
	border: none;
	font-size: 18px;
	padding: 16px 32px;
	border-radius: 4px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	transition: all 0.2s ease-in-out;
	width: 100%;

	&:hover {
		cursor: pointer;
		background-color: #4C51BF;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
	}

	&:active {
		background-color: #434190;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	}

	&:disabled {
		background-color: #667EEA;
		box-shadow: none;

		&: hover {
			cursor: not-allowed;
			box-shadow: none;			
		}

		&:active {
			background-color: #667EEA;
			box-shadow: none;
		}
	}
`;

export default Button;