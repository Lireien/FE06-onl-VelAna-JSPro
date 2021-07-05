import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/let's now a little about methods in js with react!/i);
  expect(textElement).toBeInTheDocument();
});
