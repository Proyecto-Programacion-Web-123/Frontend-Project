// src/app/components/__tests__/IndieFAQ.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import IndieFAQ from '../components/IndieFAQ'

describe('IndieFAQ Component', () => {
  beforeEach(() => {
    render(<IndieFAQ />)
  })

  it('renders main titles and image', () => {
    expect(screen.getByText('Indie Games')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByAltText('sifu')).toBeInTheDocument()
    expect(screen.getByText('Find our Titles')).toBeInTheDocument()
  })

  it('renders all FAQ categories', () => {
    const categories = ["Accounts", "Purchases", "Delivery & Keys"]
    categories.forEach(cat => {
      expect(screen.getByText(cat)).toBeInTheDocument()
    })
  })

  it('toggles FAQ answers when category buttons are clicked', () => {
    const accountsButton = screen.getByText('Accounts')
    const purchasesButton = screen.getByText('Purchases')
    const deliveryButton = screen.getByText('Delivery & Keys')

    // Inicialmente, solo Accounts está activo
    expect(screen.getByText('Yes, you need to create an account to complete your purchase and access your game keys.')).not.toHaveClass('hidden')
    expect(screen.getByText('Refunds are available within 14 days of purchase, as long as the game key hasn\'t been redeemed.')).toHaveClass('hidden')
    expect(screen.getByText('We accept credit/debit cards, PayPal, and other local payment methods depending on your region.')).toHaveClass('hidden')

    // Hacer click en Purchases
    fireEvent.click(purchasesButton)
    expect(screen.getByText('Yes, you need to create an account to complete your purchase and access your game keys.')).toHaveClass('hidden')
    expect(screen.getByText('Refunds are available within 14 days of purchase, as long as the game key hasn\'t been redeemed.')).not.toHaveClass('hidden')

    // Hacer click en Delivery & Keys
    fireEvent.click(deliveryButton)
    expect(screen.getByText('We accept credit/debit cards, PayPal, and other local payment methods depending on your region.')).not.toHaveClass('hidden')
  })

  it('collapses FAQ answer if same category clicked twice', () => {
    const accountsButton = screen.getByText('Accounts')
    fireEvent.click(accountsButton) // colapsa
    expect(screen.getByText('Yes, you need to create an account to complete your purchase and access your game keys.')).toHaveClass('hidden')
  })
})
