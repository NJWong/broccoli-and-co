/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';

type TextFieldProps = {
	label: string,
	name: string,
	register: any,
	errors: any,
}

const TextField = (props: TextFieldProps) => {
	const styles: SerializedStyles[] = [base];

	if (props.errors[props.name]) {
		styles.push(error);
	}

	return (
		<div css={styles}>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				name={props.name}
				id={props.name}
				type="text"
				ref={props.register}
			/>
			{ props.errors[props.name] && <p>{ props.errors[props.name].message }</p>}
		</div>
	);
}

const base = css`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;

	label {
		font-size: 14px;
		margin-bottom: 8px;
	}

	input {
		border: 1px solid #718096;
		color: #111111;
		padding: 12px 16px;
		font-size: 18px;
		border-radius: 4px;
	}
`;

const error = css`
	input {
		border-color: #E53E3E;
		outline-color: #E53E3E;
	}

	p {
		font-size: 14px;
		color: #E53E3E;
		font-weight: 500;
		margin-top: 4px;
		margin-bottom: 0;
	}
`;

export default TextField;