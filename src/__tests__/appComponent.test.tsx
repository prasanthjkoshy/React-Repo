import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'

test('renders product listing and search', () => {
  render(<App />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});