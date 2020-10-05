/** @jsx jsx */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import breakpoints from '../../utils/breakpoints';
import requestInvite from '../../services/InviteService';

const Modal = styled(ReactModal)`
	font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
	background-color: #FFFFFF;
	outline: none;
	min-width: 220px;
	margin-left: 16px;
	margin-right: 16px;
	margin-top: 10vh;
	padding: 24px;
	border-radius: 4px;

	${breakpoints.sm} {
		width: 350px;
		margin-left: auto;
		margin-right: auto;
	}

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
	openSuccessModal: Function,
}

type RequestFormInputs = {
	name: string,
	email: string,
	emailConfirm: string,
}

const RequestModal: React.FC<RequstModalProps> = (props) => {
	const [requestPending, setRequestPending] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { register, handleSubmit, errors, getValues, reset } = useForm<RequestFormInputs>({
		mode: 'onSubmit',
	});

	const onSubmit = async (data: any) => {
		setServerError(false);
		setRequestPending(true);

		try {
			await requestInvite(data.name, data.email);
			handleClose();
			props.openSuccessModal();
		} catch (error) {
			setErrorMessage(error.message);
			setServerError(true);
		}

		setRequestPending(false);
	};

	const handleClose = () => {
		reset();
		setErrorMessage('');
		setServerError(false);
		props.closeModal();
	}

	return (
		<Modal
			isOpen={props.showModal}
			onRequestClose={handleClose}
			style={modal}
			ariaHideApp={process.env.NODE_ENV !== 'test'}
		>
			<h2 data-testid="modal-header">Request an invite</h2>
			<form data-testid="modal-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
				{ serverError &&
					<div css={errorBox}>
						<p>{errorMessage}</p>
					</div>
				}
			</form>
		</Modal>
	);
}

const modal = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.4)`,
  }
}

const errorBox = css`
	margin-top: 24px;
	background-color: #FED7D7;
	padding: 16px;
	border-radius: 4px;

	p {
		color: #E53E3E;
		font-weight: 500;
		margin-top: 4px;
		margin-bottom: 0;
		text-align: center;
	}
`;

export default RequestModal;