import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
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

test('App should have a Landing', () => {
  const { getByTestId } = render(<App />);
  const landing = getByTestId('landing');
  expect(landing).toBeInTheDocument();
})
