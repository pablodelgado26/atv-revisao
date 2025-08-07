'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { productsData } from '@/data/products'

const ProductContext = createContext()

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductProvider')
  }
  return context
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [productCount, setProductCount] = useState(0)

  useEffect(() => {
    setProducts(productsData)
  }, [])

  useEffect(() => {
    setProductCount(products.length)
  }, [products])

  return (
    <ProductContext.Provider value={{ products, productCount, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
