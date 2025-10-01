// src/app/components/Discount.test.tsx
import { render, screen } from '@testing-library/react';
import Discount from '../components/Discount';

describe('Discount component', () => {

  test('renders the off badge', () => {
    render(<Discount />);
    const badge = screen.getByText(/35% OFF/i);
    expect(badge).toBeInTheDocument();
  });

  test('renders the Kingdom Hearts image', () => {
    render(<Discount />);
    const img = screen.getByAltText(/Kingdom Hearts/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/kingdom.png');
  });

  test('renders the SHOW MORE button with correct href', () => {
    render(<Discount />);
    const button = screen.getByRole('link', { name: /SHOW MORE/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#hab');
  });

});
