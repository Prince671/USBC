import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

test('renders login form', () => {
  render(<Login />);
  const usernameLabel = screen.getByText(/Username:/i);
  expect(usernameLabel).toBeInTheDocument();
});

test('handles login form submission', () => {
  render(<Login />);
  fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: 'user' } });
  fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'pass' } });
  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
});
