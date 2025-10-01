import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renderiza correctamente los children', () => {
    render(
      <RootLayout>
        <div data-testid="child">Hola Mundo</div>
      </RootLayout>
    );

    expect(screen.getByTestId('child')).toHaveTextContent('Hola Mundo');
  });

  it('aplica la clase de Inter al body', () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    );

    expect(document.body.className).toContain('Inter');
  });
});
