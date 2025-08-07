import React from 'react';
import style from '../styles/not-found.module.css';

export default function NotFound() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>404</h1>
            <h2 className={style.subtitle}>Página não encontrada</h2>
            <p className={style.description}>A página que você está procurando não existe.</p>
            <a href="/" className={style.button}>Voltar ao início</a>
        </div>
    );
}