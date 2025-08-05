import React from 'react'
import style from '../styles/page.module.css'
import Next from 'next/image';
import ProductCard from '@/components/ProductCard/Product';

export default function page() {
  
  const products = [
    {
      id: 1,
      Title: 'iPhone 15 Pro Max 256GB',
      Price: 'R$ 8.999,00',
      Description: 'O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.',
      Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1692810662701',
      Rating: {
        stars: 5,
        count: 4.8,
        reviews: 1234
      },
      Category: 'smartphones'
    },
    {
      id: 2,
      Title: 'Samsung Galaxy S24 Ultra 512GB',
      Price: 'R$ 7.499,00',
      Description: 'Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis.',
      Image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop',
      Rating: {
        stars: 5,
        count: 4.7,
        reviews: 987
      },
      Category: 'smartphones'
    },
    {
      id: 3,
      Title: 'MacBook Pro 14" M3 Pro 18GB',
      Price: 'R$ 15.999,00',
      Description: 'Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração.',
      Image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
      Rating: {
        stars: 5,
        count: 4.9,
        reviews: 2156
      },
      Category: 'laptops'
    },
    {
      id: 4,
      Title: 'Dell XPS 13 Intel i7 16GB SSD 512GB',
      Price: 'R$ 6.799,00',
      Description: 'Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional.',
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLjwm7JW-Ujym7zHUJAzSU89MSb4yOJ-IVw&s',
      Rating: {
        stars: 5,
        count: 4.6,
        reviews: 543
      },
      Category: 'laptops'
    },
    {
      id: 5,
      Title: 'iPad Pro 12.9" M2 WiFi 128GB',
      Price: 'R$ 7.299,00',
      Description: 'O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.',
      Image: 'https://www.iplace.com.br/ccstore/v1/images/?source=/file/v5728186536590348729/products/229866.00-iplace-hoje-apple-ipad-12-9-6-geracao-wifi-128-cinza-espacial-mnxp3bz-a.jpg&height=424&width=424&quality=0.9',
      Rating: {
        stars: 5,
        count: 4.8,
        reviews: 1876
      },
      Category: 'tablets'
    },
    {
      id: 6,
      Title: 'Samsung Galaxy Tab S9+ 256GB',
      Price: 'R$ 4.999,00',
      Description: 'Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.',
      Image: 'https://http2.mlstatic.com/D_NQ_NP_678507-MLA84849923125_052025-O.webp', 
      Rating: {
        stars: 5,
        count: 4.5,
        reviews: 432
      },
      Category: 'tablets'
    },
    {
      id: 7,
      Title: 'Apple AirPods Pro 2ª Geração',
      Price: 'R$ 2.399,00',
      Description: 'Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria.',
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3t-p1R6JOfNaG-A-A055cvtRmOqpqozMDw&s', 
      Rating: {
        stars: 5,
        count: 4.7,
        reviews: 3421
      },
      Category: 'acessorios'
    },
    {
      id: 8,
      Title: 'Apple Watch Series 9 GPS 45mm',
      Price: 'R$ 4.299,00',
      Description: 'Smartwatch mais avançado com chip S9, Double Tap, monitoramento de saúde completo.',
      Image: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/676831/xlarge/Apple-Watch-Series-9-Caixa-Aluminium-45mm-Gps-Sport-Band-Tamanho-M-L-Midnight_1748276685.jpg', 
      Rating: {
        stars: 5,
        count: 4.6,
        reviews: 2187
      },
      Category: 'acessorios'
    },
    {
      id: 9,
      Title: 'Carregador Sem Fio MagSafe 15W',
      Price: 'R$ 399,00',
      Description: 'Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito.',
      Image: 'https://carrefourbr.vtexassets.com/arquivos/ids/13226212/Carregador-sem-fio-MagSafe-magnetico-fonte-usb-c-15w---c--NF.jpg?v=637484485561930000', 
      Rating: {
        stars: 5,
        count: 4.4,
        reviews: 876
      },
      Category: 'acessorios'
    },
    {
      id: 10,
      Title: 'Xiaomi 13 Pro 256GB Leica',
      Price: 'R$ 3.999,00',
      Description: 'Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e tela AMOLED.',
      Image: 'https://files.tecnoblog.net/wp-content/uploads/2022/12/xiaomi-13-pro.jpg  ',
      Rating: {
        stars: 5,
        count: 4.5,
        reviews: 654
      },
      Category: 'smartphones'
    }
  ];
  return (
    <div className={style.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          Title={product.Title}
          Price={product.Price}
          Description={product.Description}
          Image={product.Image}
          Rating={product.Rating}
          Category={product.Category}
        />
      ))}
    </div>

  )
}
