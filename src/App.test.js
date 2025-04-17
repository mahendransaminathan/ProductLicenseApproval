import { render, screen } from '@testing-library/react';
import App from './App';

import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

test('renders learn react link', () => {
  render(<App />);

  const homeLink = screen.getByText(/home/i);
  const personLink = screen.getByText(/person/i);
  const companyLink = screen.getByText(/company/i);
  const productLink = screen.getByText(/product/i);
  expect(homeLink).toBeInTheDocument();
  expect(personLink).toBeInTheDocument();
  expect(companyLink).toBeInTheDocument();
  expect(productLink).toBeInTheDocument();
});
