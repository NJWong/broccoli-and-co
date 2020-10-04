import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	text: 'Test button',
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

test('Subtitle should display the expected text', () => {
  const { getByTestId } = render(<Button {...testProps} />);
	const button = getByTestId('button');
	expect(button).toBeInTheDocument();
	expect(button.textContent).toBe(testProps.text);
})
