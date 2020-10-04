import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	brandName: 'Test brand name',
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
  const { getByTestId } = render(<Header {...testProps} />);
	const header = getByTestId('header');
	expect(header).toBeInTheDocument();
	expect(header.textContent).toBe(testProps.brandName);
})
