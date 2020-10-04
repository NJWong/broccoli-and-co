import React from 'react';
import { render } from '@testing-library/react';
import Subtitle from './Subtitle';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
const testProps = {
	text: 'Test subtitle',
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
  const { getByTestId } = render(<Subtitle {...testProps} />);
  const subtitle = getByTestId('subtitle');
	expect(subtitle).toBeInTheDocument();
	expect(subtitle.textContent).toBe(testProps.text);
})
