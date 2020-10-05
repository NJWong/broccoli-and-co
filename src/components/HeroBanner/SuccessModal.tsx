/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';

import Button from '../Button/Button';
import breakpoints from '../../utils/breakpoints';

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

	> p {
		text-align: center;
	}

	> button {
		margin-top: 32px;
	}
`;

type SuccessModalProps = {
	showModal: boolean,
	closeModal: Function,
}

const SuccessModal: React.FC<SuccessModalProps> = (props) => (
	<Modal
		isOpen={props.showModal}
		onRequestClose={() => { props.closeModal() }}
		style={modal}
	>
		<h2 data-testid="modal-header">All done!</h2>
		<p data-testid="modal-content">You will be one of the first to experience Broccoli &amp; Co. when we launch.</p>
		<Button text="Ok" action={props.closeModal} />
	</Modal>
)

const modal = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.4)`,
  }
}

export default SuccessModal;