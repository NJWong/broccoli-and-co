/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const footerStyle = css`
	background-color: #FFFFFF;
	font-size: 12px;
	text-align: center;
	padding: 16px 0;
	color: #4A5568;
`;

const Footer = () => {
	return (
		<footer css={footerStyle} data-testid="footer">
			<p>Made with <span role="img" aria-label="love">❤️&nbsp;</span> in Melbourne.</p>
			<p>&#169; { new Date().getFullYear() } Broccoli &amp; Co. All rights reserved.</p>
		</footer>
	);
};

export default Footer;

