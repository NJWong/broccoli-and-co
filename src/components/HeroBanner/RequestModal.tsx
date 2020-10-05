/** @jsx jsx */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';

// Don't attach root element when running tests
if (process.env.NODE_ENV !== 'test') {
	ReactModal.setAppElement('#root');
}

const Modal = styled(ReactModal)`
	font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
	background-color: #FFFFFF;
	outline: none;
	width: 350px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20%;
	padding: 24px;
	border-radius: 4px;

	> h2 {
		margin-top: 0;
		font-weight: 400;
		text-align: center;
	}

	> form > button {
		margin-top: 32px;
	}
`;

type RequstModalProps = {
	showModal: boolean,
	closeModal: Function,
}

type RequestFormInputs = {
	name: string,
	email: string,
	emailConfirm: string,
}

const RequestModal: React.FC<RequstModalProps> = (props) => {
	const [requestPending, setRequestPending] = useState(false);
	const { register, handleSubmit, errors, getValues, reset } = useForm<RequestFormInputs>({
		mode: 'onSubmit',
	});

	const onSubmit = (data: any) => {
		console.log(data)

		setRequestPending(true);
	};

	const handleClose = () => {
		reset();
		props.closeModal();
	}

	return (
		<Modal
				isOpen={props.showModal}
				onRequestClose={handleClose}
				style={modal}
			>
				<h2>Request an invite</h2>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<TextField
						label="Full name"
						name="name"
						register={register({
							required: 'This field is required',
							minLength: {
								value: 3,
								message: 'Name must be at least 3 characters',
							}
						})}
						errors={errors}
					/>
					<TextField
						label="Email"
						name="email"
						register={register({
							required: 'This field is required',
							pattern: {
								value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: 'Must be a valid email address',
							}
						})}
						errors={errors}
					/>
					<TextField
						label="Confirm email"
						name="emailConfirm"
						register={register({
							required: 'This field is required',
							validate: value => value === getValues('email') || 'Must match Email field'
						})}
						errors={errors}
					/>
					<Button text={requestPending ? 'Sending, please wait...' : 'Send!'} disabled={requestPending}/>
				</form>
			</Modal>
	);
}

const modal = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.4)`,
  }
}

export default RequestModal;