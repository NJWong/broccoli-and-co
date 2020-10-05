/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';

import Button from '../Button/Button';
import RequestModal from './RequestModal';
import SuccessModal from './SuccessModal';
import breakpoints from '../../utils/breakpoints';

type HeroBannerProps = {
	title: string,
	subtitle: string,
	buttonText: string,
}

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
	const [showRequestModal, setShowRequestModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

  const openRequestModal = () => {
    setShowRequestModal(true);
  }

  const closeRequestModal = () => {
    setShowRequestModal(false);
	}

	const openSuccessModal = () => {
    setShowSuccessModal(true);
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
	}
	
	return (
		<main css={container} data-testid="hero-banner">
			<h1 css={title} data-testid="title">{props.title}</h1>
			<p css={subtitle} data-testid="subtitle">{props.subtitle}</p>
			<div css={buttonContainer}>
				<Button text={props.buttonText} action={openRequestModal} />
			</div>
			<RequestModal showModal={showRequestModal} closeModal={closeRequestModal} openSuccessModal={openSuccessModal} />
			<SuccessModal showModal={showSuccessModal} closeModal={closeSuccessModal} />
		</main>
	);
};

const container = css`
	margin-bottom: auto;
	text-align: center;
	padding: 32px;

	${breakpoints.md} {
		padding: 48px;
	}
`;

const title = css`
	font-weight: 500;
	color: #111111;
	display: inline-block;
	font-size: 2.25rem;

	${breakpoints.md} {
		font-size: 3rem;
	}
`;

const subtitle = css`
	font-weight: 300;
	color: #1A202C;
	margin-top: 0;
	margin-bottom: 32px;
	font-size: 1.25rem;

	${breakpoints.md} {
		font-size: 1.5rem;
	}
`;

const buttonContainer = css`
	display: inline-block;
	max-width: 350px;
`;

export default HeroBanner;