/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const headerStyle = css`
	height: 40px;
	padding: 16px 48px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #E2E8F0;
`;

const logoStyle = css`
	text-decoration: none;
	color: #111111;
	font-weight: 300;
	font-size: 24px;
`;

type HeaderProps = {
	brandName: string,
}

const Header = (props: HeaderProps) => {
	return (
		<header css={headerStyle} data-testid="header">
			<nav>
				<div>
					<a href="/" css={logoStyle}>{props.brandName}</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;