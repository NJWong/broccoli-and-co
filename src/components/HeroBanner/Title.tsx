/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import breakpoints from '../../utils/breakpoints';

type TitleProps = {
	text: string,
}

const Title = (props: TitleProps) => (
	<h1 css={title} data-testid="title">{props.text}</h1>
)

const title = css`
	font-weight: 500;
	color: #111111;
	display: inline-block;
	font-size: 2.25rem;

	${breakpoints.md} {
		font-size: 3rem;
	}
`;

export default Title;