'use client'
import React from 'react'
import style from '../styles/page.module.css'
import ProductCard from '@/components/ProductCard/Product'
import { useProducts } from '@/contexts/ProductContext'

export default function HomePage() {
  const { products } = useProducts()

  return (
    <div className={style.products}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
