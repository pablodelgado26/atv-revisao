'use client'
import React from 'react'
import Image from 'next/image'
import style from './Header.module.css'

export default function Header({ title = "🛒 Loja de Eletrônicos", subtitle = "Os melhores produtos com os melhores preços!", totalProducts = 0 }) {
    return (
        <div className={style.header}>
            <div className={style.logoContainer}>
                <h1>{title}</h1>
            </div>
            <p>{subtitle}</p>
            <p>📊 Total de produtos: <span>{totalProducts}</span></p>
        </div>
    )
}
