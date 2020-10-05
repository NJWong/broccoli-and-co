/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Footer from './components/Footer/Footer';

const Landing: React.FC = () => {
  return (
    <div css={styles} data-testid="landing">
      <Header brandName="Broccoli &amp; Co." />
      <HeroBanner
				title="A better way to enjoy every day."
				subtitle="Be the first to know when we launch."
        buttonText="Request an invite"
			/>
      <Footer />
    </div>
  );
}

const styles = css`
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F7FAFC;
  min-width: 320px;
`;

export default Landing;