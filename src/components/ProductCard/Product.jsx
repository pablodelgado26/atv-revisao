import React from 'react'
import Image from 'next/image'
import style from './ProductCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div className={style.productCard} data-category={product.category}>
            <div className={style.productImage}>
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={200}
                        className={style.productImageElement}
                    />
                ) : (
                    <div className={style.imagePlaceholder}>
                        📱
                    </div>
                )}
            </div>
            <div className={style.productTitle}>{product.title}</div>
            <div className={style.productPrice}>{product.price}</div>
            <div className={style.productDescription}>{product.description}</div>
            <div className={style.productRating}>
                <span className={style.stars}>
                    {'⭐'.repeat(product.rating?.stars || 0)}
                </span>
                <span>
                    ({product.rating?.count || 0}) - {product.rating?.reviews || 0} avaliações
                </span>
            </div>
        </div>
    )
}
