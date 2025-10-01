// src/app/components/Features.test.tsx
import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features component', () => {

  test('renders the features section with title and subtitle', () => {
    render(<Features />);

    const title = screen.getByText(/C A T E G O R I E S/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/Explore our main gaming categories/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders all category cards', () => {
    render(<Features />);
    const categories = ["ACTION", "ADVENTURE", "STRATEGY", "ROLEPLAYING", "HORROR", "RACING"];
    categories.forEach(name => {
      const catElement = screen.getByText(name);
      expect(catElement).toBeInTheDocument();
    });
  });

  test('renders correct images for each category', () => {
    render(<Features />);
    const images = [
      { alt: "ACTION games", src: "/accion.png" },
      { alt: "ADVENTURE games", src: "/aventura.png" },
      { alt: "STRATEGY games", src: "/estrategia.png" },
      { alt: "ROLEPLAYING games", src: "/rpg.png" },
      { alt: "HORROR games", src: "/signalis.png" },
      { alt: "RACING games", src: "/art.png" },
    ];

    images.forEach(img => {
      const imgElement = screen.getByAltText(img.alt);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', img.src);
    });
  });

});
