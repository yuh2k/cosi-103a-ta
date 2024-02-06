import React from 'react';
import { render } from '@testing-library/react';
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



test('renders the Cinnamon Rolls recipe component with correct content', () => {
  //const { getByText } = render(<CinnamonRollsRecipe />);
  const html = fs.readFileSync(path.resolve(__dirname, '../public/CinnamonRolls.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const title = document.querySelector('title');
  expect(title.textContent).toBe("Cinnamon Rolls");

  const heading= document.querySelector("h1");
  expect(heading.textContent).toBe("Cinnamon Rolls");

  
  const heading2 ="Ingredients:";
  expect(document.body.textContent).toContain(heading2);

  const heading2second ="Instructions:";
  expect(document.body.textContent).toContain(heading2second);
  
});
