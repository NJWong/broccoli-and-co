import React from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
	showModal: boolean,
	closeModal: Function,
	content: React.ReactNode,
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<ReactModal
			isOpen={props.showModal}
			onRequestClose={() => { props.closeModal() }}
			style={styles}
		>
			{ props.content }
		</ReactModal>
	);
}

const styles = {
  content: {
    width: '300px',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.4)`,
  }
}

export default Modal;