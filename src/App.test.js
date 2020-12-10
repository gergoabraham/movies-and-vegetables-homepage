import { render, screen } from '@testing-library/react';
import App from './App';

test('renders extension name', () => {
  render(<App />);
  const extensionNames = screen.getAllByText(/movies and vegetables/i);
  extensionNames.forEach((name) => expect(name).toBeInTheDocument());
});
