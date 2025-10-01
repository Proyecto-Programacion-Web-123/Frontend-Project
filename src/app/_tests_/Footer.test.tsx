// src/app/components/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {

  test('renders the footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('renders the company logo with correct alt and src', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Logo de la empresa/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo_white.png');
  });

  test('renders the footer list with correct items', () => {
    render(<Footer />);
    const leftItems = ["BACK TO TOP", "SHOP", "ABOUT US", "BLOG", "CONTACT US"];
    const rightItems = ["FACEBOOK", "INSTAGRAM", "TWITTER", "TIKTOK"];

    leftItems.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    rightItems.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('renders the promo section with text and button', () => {
    render(<Footer />);
    const promoText = screen.getByText(/Join our program to get news & more straight to your inbox./i);
    expect(promoText).toBeInTheDocument();

    const button = screen.getByRole('link', { name: /JOIN/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('footer-shop-btn');
  });

  test('renders the copyright text', () => {
    render(<Footer />);
    const copyText = screen.getByText(/2025 Term. All rights reserved./i);
    expect(copyText).toBeInTheDocument();
  });

});
