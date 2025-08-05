import React from 'react';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: '#f8f8f8'
        }}>
            <h1 style={{ fontSize: '4rem', color: '#d32f2f' }}>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe.</p>
        </div>
    );
}