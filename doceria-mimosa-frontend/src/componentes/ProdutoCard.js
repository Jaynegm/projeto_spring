// src/componentes/ProdutoCard.js
import React from 'react';

const ProdutoCard = ({ produto }) => {
    const { nome, descricao, imagem, valor } = produto;

    return (
        <div style={styles.card}>
            <img src={imagem} alt={nome} style={styles.image} />
            <h3 style={styles.title}>{nome}</h3>
            <p style={styles.description}>{descricao}</p>
            <p style={styles.price}>R$ {valor.toFixed(2)}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
    },
    title: {
        fontSize: '18px',
        margin: '10px 0',
        color: '#333',
    },
    description: {
        fontSize: '14px',
        color: '#666',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#D2691E', // Marrom claro, como tons de doceria
    },
};

export default ProdutoCard;
