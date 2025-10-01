// src/app/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {

  test('renders the header element', () => {
    render(<Header />);
    const header = screen.getByRole('banner'); // <header> semantic role
    expect(header).toBeInTheDocument();
  });

  test('renders both icons with correct alt attributes', () => {
    render(<Header />);
    const icon2 = screen.getByAltText(/icon2term/i);
    const icon = screen.getByAltText(/icon term/i);
    expect(icon2).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('renders desktop nav links correctly', () => {
    render(<Header />);
    const links = ["SHOP", "ABOUT US", "BLOG"];
    links.forEach(text => {
      const link = screen.getAllByText(text)[0]; // first occurrence in nav-desktop
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe('A');
    });
  });

  test('renders hamburger menu and items', () => {
    render(<Header />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const menuItems = ["HOME", "SHOP", "ABOUT US", "BLOG"];
    menuItems.forEach(text => {
      const item = screen.getAllByText(text).find(el => el.tagName === 'LABEL');
      expect(item).toBeInTheDocument();
    });
  });

  test('renders login button in menu', () => {
    render(<Header />);
    const loginBtn = screen.getByText(/LOG IN/i);
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveClass('login-btn');
  });

});
