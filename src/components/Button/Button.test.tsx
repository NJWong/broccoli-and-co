import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
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

test('Subtitle should display the expected text', () => {
  const testProps = {
    text: 'Test button',
  };

  const { getByTestId } = render(<Button {...testProps} />);
	const button = getByTestId('button');
	expect(button).toBeInTheDocument();
	expect(button.textContent).toBe(testProps.text);
})

test('Button should call action when clicked', () => {
  const testProps = {
    text: 'Test button',
    action: jest.fn(),
  };

  const expectedAction = testProps.action;
  const { getByTestId } = render(<Button {...testProps} />);
  const button = getByTestId('button');
  button.click();
  expect(expectedAction).toBeCalled();
})

test('Button should not call action when disabled and clicked', () => {
  const testProps = {
    text: 'Test button',
    action: jest.fn(),
    disabled: true,
  };

  const expectedAction = testProps.action;
  const { getByTestId } = render(<Button {...testProps} />);
  const button = getByTestId('button');
  button.click();
  expect(expectedAction).not.toBeCalled();
})