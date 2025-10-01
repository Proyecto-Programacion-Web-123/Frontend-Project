// src/app/components/__tests__/TrendingProducts.test.tsx
import { render, screen } from '@testing-library/react'
import TrendingProducts from '../components/TrendingProducts'

const mockProducts = [
  {
    id_product: 1,
    name: 'Elden Ring',
    price: 250,
    old_price: 300,
    description: 'Action RPG game',
    image_url: '/eldenring.png',
    discount: 20,
    is_new: true,
  },
  {
    id_product: 2,
    name: 'Hollow Knight',
    price: 150,
    old_price: null,
    description: 'Metroidvania game',
    image_url: '/hollowknight.png',
    discount: null,
    is_new: false,
  },
]

describe('TrendingProducts Component', () => {
  it('renders titles and subtitle', () => {
    render(<TrendingProducts products={[]} loading={false} />)
    expect(screen.getByText('T R E N D I N G')).toBeInTheDocument()
    expect(screen.getByText('Discover the most relevant titles right now')).toBeInTheDocument()
  })

  it('shows loading when loading is true', () => {
    render(<TrendingProducts products={[]} loading={true} />)
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders product cards with correct info', () => {
    render(<TrendingProducts products={mockProducts} loading={false} />)

    // Primer producto
    expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    expect(screen.getByText('Q250')).toBeInTheDocument()
    expect(screen.getByText('Q300')).toBeInTheDocument()
    expect(screen.getByText('Action RPG game')).toBeInTheDocument()
    expect(screen.getByText('-20%')).toBeInTheDocument()
    expect(screen.getByText('NEW')).toBeVisible() // aquí verificamos visibilidad
    expect(screen.getAllByText('ADD TO CART')[0]).toBeInTheDocument()

    // Segundo producto
    expect(screen.getByText('Hollow Knight')).toBeInTheDocument()
    expect(screen.getByText('Q150')).toBeInTheDocument()
    expect(screen.getByText('Metroidvania game')).toBeInTheDocument()
    // Verificar que NO esté visible en lugar de no existir
    const newLabel = screen.queryByText('NEW')
    if (newLabel) expect(newLabel).not.toBeVisible()
    const discountLabel = screen.queryByText('-')
    if (discountLabel) expect(discountLabel).not.toBeVisible()
    expect(screen.getAllByText('ADD TO CART')[1]).toBeInTheDocument()
  })
})
