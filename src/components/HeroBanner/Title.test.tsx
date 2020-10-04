import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	text: 'Test title',
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

test('Title should display the expected text', () => {
  const { getByTestId } = render(<Title {...testProps} />);
  const title = getByTestId('title');
	expect(title).toBeInTheDocument();
	expect(title.textContent).toBe(testProps.text);
})
