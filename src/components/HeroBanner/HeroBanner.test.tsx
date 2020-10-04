import React from 'react';
import { render } from '@testing-library/react';
import HeroBanner from './HeroBanner';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	title: 'Test title',
	subtitle: 'Test subtitle',
	buttonText: 'Test button',
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('HeroBanner should render the expected title', () => {
  const { getByTestId } = render(<HeroBanner {...testProps} />);
  const title = getByTestId('title');
	expect(title).toBeInTheDocument();
	expect(title.textContent).toBe(testProps.title);
})

test('HeroBanner should render the expected subtitle', () => {
  const { getByTestId } = render(<HeroBanner {...testProps} />);
  const subtitle = getByTestId('subtitle');
	expect(subtitle).toBeInTheDocument();
	expect(subtitle.textContent).toBe(testProps.subtitle);
})

test('HeroBanner should render the expected CTA button', () => {
  const { getByTestId } = render(<HeroBanner {...testProps} />);
  const button = getByTestId('button');
	expect(button).toBeInTheDocument();
	expect(button.textContent).toBe(testProps.buttonText);
})