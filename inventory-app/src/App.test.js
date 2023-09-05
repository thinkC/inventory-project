import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Inventory Items/i);
  expect(linkElement).toBeInTheDocument();
});


// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders Inventory Items header', () => {
//   const { getByText } = render(<App />);
//   const headerElement = getByText(/Inventory Items/i);
//   expect(headerElement).toBeInTheDocument();
// });
