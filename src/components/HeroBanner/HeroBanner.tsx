/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Title from './Title';
import Subtitle from './Subtitle';
import Button from '../Button/Button';
import breakpoints from '../../utils/breakpoints';

type HeroBannerProps = {
	title: string,
	subtitle: string,
	buttonText: string,
}

const HeroBanner = (props: HeroBannerProps) => {
	return (
		<main css={layout} data-testid="hero-banner">
			<Title text={props.title} />
			<Subtitle text={props.subtitle} />
			<Button text={props.buttonText} />
		</main>
	);
};

const layout = css`
	margin-bottom: auto;
	text-align: center;
	padding: 32px;

	${breakpoints.md} {
		padding: 48px;
	}
`;

export default HeroBanner;