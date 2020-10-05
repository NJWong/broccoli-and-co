import React from 'react';
import { render } from '@testing-library/react';
import TextField from './TextField';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	label: 'Test label',
	name: 'test',
};

beforeEach(() => {
  container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('TextField should render as expected', () => {
	const { getByTestId } = render(<TextField {...testProps} />);
	
  const label = getByTestId('label');
	expect(label).toBeInTheDocument();
	expect(label.textContent).toBe(testProps.label);

	const input = getByTestId('input');
	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('name', testProps.name);
})