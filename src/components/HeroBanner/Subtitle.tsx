/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import breakpoints from '../../utils/breakpoints';

type SubtitleProps = {
	text: string,
}

const Subtitle = (props: SubtitleProps) => (
	<p css={subtitle} data-testid="subtitle">{props.text}</p>
)

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

export default Subtitle;