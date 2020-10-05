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
  container.id = 'root';
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

test('Request modal should show when CTA button is clicked', () => {
  const { getByTestId, getByText, getAllByTestId } = render(<HeroBanner {...testProps} />);
  const button = getByTestId('button');
  button.click();

  // Check modal header exists
  const modalHeader = getByTestId('modal-header');
  expect(modalHeader).toBeInTheDocument();
  
  // Check modal form exists
  const modalForm = getByTestId('modal-form');
  expect(modalForm).toBeInTheDocument();

  // Check three text fields exist
  const fields = getAllByTestId('text-field');
  expect(fields.length).toBe(3);

  // Check the submit button exists
  const submit = getByText('Send!');
  expect(submit).toBeInTheDocument();
})