import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Landing from './Landing';
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

test('Landing should have a header', () => {
  const { getByTestId } = render(<Landing />);
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
})

test('Landing should have a hero banner', () => {
  const { getByTestId } = render(<Landing />);
  const heroBanner = getByTestId('hero-banner');
  expect(heroBanner).toBeInTheDocument();
})

test('Landing should have a footer', () => {
  const { getByTestId } = render(<Landing />);
  const footer = getByTestId('footer');
  expect(footer).toBeInTheDocument();
})
