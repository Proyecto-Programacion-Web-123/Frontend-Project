// src/app/components/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero component', () => {

  test('renders the TERMN logo', () => {
    render(<Hero />);
    const logo = screen.getByAltText(/Logo TERMN/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  test('renders the hero text', () => {
    render(<Hero />);
    const heroText = screen.getByText(/WHERE ALL GAMES CONVERGE/i);
    expect(heroText).toBeInTheDocument();
  });

  test('renders the discover games button with correct href', () => {
    render(<Hero />);
    const button = screen.getByRole('link', { name: /DISCOVER GAMES/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#hab');
  });

  test('renders the dangerous marquee texts', () => {
    render(<Hero />);
    const dangerousTexts = screen.getAllByText(/IT'S DANGEROUS TO GO ALONE/i);
    expect(dangerousTexts.length).toBeGreaterThanOrEqual(4);
  });

  test('renders the NES • SEGA GENESIS marquee texts', () => {
    render(<Hero />);
    const segaTexts = screen.getAllByText(/NES • SEGA GENESIS/i);
    expect(segaTexts.length).toBeGreaterThanOrEqual(4);
  });

  test('renders the Elden Ring illustration', () => {
    render(<Hero />);
    const eldenImg = screen.getByAltText(/Ilustración Elden Ring/i);
    expect(eldenImg).toBeInTheDocument();
    expect(eldenImg).toHaveAttribute('src', '/ilustracion.png');
  });

});
