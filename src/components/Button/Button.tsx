/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
	text: string,
}

const Button = (props: ButtonProps) => {
	return(
		<button css={styles} data-testid="button">{props.text}</button>
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

	&:hover {
		cursor: pointer;
		background-color: #4C51BF;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
	}

	&:active {
		background-color: #434190;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	}
`;

export default Button;