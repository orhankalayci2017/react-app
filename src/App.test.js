import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/xLearn react/i);
  expect(linkElement).toBeInTheDocument();
});
