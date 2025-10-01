// src/app/__tests__/Home.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../page'

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
  }
]

describe('Home Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts)
      } as Response)
    ) as jest.Mock
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders all main components', async () => {
    render(<Home />)

    // Header y Hero siempre visibles
    expect(screen.getAllByAltText(/icon/i)[0]).toBeInTheDocument()
    expect(screen.getByAltText('Logo TERMN')).toBeInTheDocument()

    // Loading de TrendingProducts aparece primero
    expect(screen.getByText('Loading products...')).toBeInTheDocument()

    // Espera a que fetch termine y productos se rendericen
    await waitFor(() => {
      expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    })

    // Componentes Discount, Features, IndieFAQ y Footer
    expect(screen.getByText('35% OFF')).toBeInTheDocument() // Discount
    expect(screen.getByText('C A T E G O R I E S')).toBeInTheDocument() // Features
    expect(screen.getByText('FAQ')).toBeInTheDocument() // IndieFAQ
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument() // Footer
  })

  it('calls fetch and updates TrendingProducts', async () => {
    render(<Home />)

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/products')

    await waitFor(() => {
      expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    })
  })
})
