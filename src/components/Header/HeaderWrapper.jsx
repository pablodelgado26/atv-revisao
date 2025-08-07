'use client'
import React from 'react'
import Header from './Header'
import { useProducts } from '@/contexts/ProductContext'

export default function HeaderWrapper() {
    const { productCount } = useProducts()
    
    return (
        <Header 
            title="🛒 Loja de Eletrônicos"
            subtitle="Os melhores produtos com os melhores preços!"
            totalProducts={productCount}
        />
    )
}
