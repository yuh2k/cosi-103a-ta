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

test('chickensalad.html contains specific text', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/Chickensalad.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // Check if the document contains a specific text
  const specificText = 'Chicken Salad Recipe';
  expect(document.body.textContent).toContain(specificText);
  
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

test('kungpaochicken.html contains specific text', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../public/kungpaochicken.html'), 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const specificText = 'Sichuan Kung Pao Chicken 宫保鸡';
  expect(document.body.textContent).toContain(specificText);
});
