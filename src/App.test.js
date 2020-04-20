import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  const { getByText } = render(<App />);
  const submitButton = getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
