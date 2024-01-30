import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Accordion with correct default active key', () => {
  const { getByText } = render(<App />);
  
  // Check if the Accordion Header is present
  const accordionHeader = getByText(/1. Dessert: Fruit Topped Waffles/i);
  expect(accordionHeader).toBeInTheDocument();


});

test('renders Accordion components with specific content', () => {
  const { getByText } = render(<App />);

  // Check if specific headers and content are present in the Accordion
  expect(getByText('5. Lunch: Chicken Shawarma')).toBeInTheDocument();
  expect(getByText('2 tablespoons olive oil')).toBeInTheDocument();
  expect(getByText('7. Breakfast: Menemen')).toBeInTheDocument();
  expect(getByText('4 eggs')).toBeInTheDocument();

});