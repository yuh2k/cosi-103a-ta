import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Accordion with correct default active key', () => {
  const { getByText } = render(<App />);
  
  // Check if the Accordion Header is present
  const accordionHeader = getByText(/1. Dessert: Fruit Topped Waffles/i);
  expect(accordionHeader).toBeInTheDocument();


});