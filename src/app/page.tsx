'use client'

import { useState, useEffect } from 'react'
import './globals.css'

import Header from './components/Header'
import Hero from './components/Hero'
import TrendingProducts from './components/TrendingProducts'
import Discount from './components/Discount'
import Features from './components/Features'
import IndieFAQ from './components/IndieFAQ'
import Footer from './components/Footer'

interface Product {
  id_product: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  old_price?: number | null;
  discount?: number | null;
  is_new?: boolean;
}

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTrendingProducts = async () => {
    try {
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      const processed = data.map((p: any) => ({
        ...p,
        image_url: p.image_url?.startsWith('/img/') ? p.image_url.replace('/img/', '') : p.image_url || 'default-image.png'
      }))
      setTrendingProducts(processed)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTrendingProducts() }, [])

  return (
    <>
      <Header />
      <Hero />
      <TrendingProducts products={trendingProducts} loading={loading} />
      <Discount />
      <Features />
      <IndieFAQ />
      <Footer />
    </>
  )
}
