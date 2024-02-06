import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders Accordion with correct default active key', () => {
//   const { getByText } = render(<App />);
  
//   // Check if the Accordion Header is present
//   const accordionHeader = getByText(/1. Dessert: Fruit Topped Waffles/i);
//   expect(accordionHeader).toBeInTheDocument();


// });

// test('renders Accordion components with specific content', () => {
//   const { getByText } = render(<App />);

//   // Check if specific headers and content are present in the Accordion
//   expect(getByText('5. Lunch: Chicken Shawarma')).toBeInTheDocument();
//   expect(getByText('2 tablespoons olive oil')).toBeInTheDocument();
//   expect(getByText('7. Breakfast: Menemen')).toBeInTheDocument();
//   expect(getByText('4 eggs')).toBeInTheDocument();

// });

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Checks if the title matches the expected title
test('Cheesecake.html has correct title', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/Cheesecake.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const title = document.querySelector('title');
  expect(title.textContent).toBe('Cheesecake Recipe');
});

test('Chickensalad.html has correct title', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/Chickensalad.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const title = document.querySelector('title');
  expect(title.textContent).toBe('Chicken Salad Recipe');
});

test('Menemen.html has correct title', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/Menemen.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;
  
  const title = document.querySelector('title');
  expect(title.textContent).toBe('Menemen Recipe');
}); 
test('chickensalad.html contains specific text', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/Chickensalad.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // Check if the document contains a specific text
  const specificText = 'Chicken Salad Recipe';
  expect(document.body.textContent).toContain(specificText);
});
