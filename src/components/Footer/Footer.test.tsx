import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('Footer should render', () => {
  const { getByTestId } = render(<Footer />);
	const footer = getByTestId('footer');
	expect(footer).toBeInTheDocument();
})
