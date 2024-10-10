// src/components/ProdutoCard.js
import React from 'react';

const ProdutoCard = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
            <img 
                src={product.imagem} 
                alt={product.nome} 
                style={{ width: '100%', borderRadius: '5px', height: '150px', objectFit: 'cover' }} 
            />
            <h4 style={{ fontSize: '1.2em' }}>{product.nome}</h4>
            <p style={{ fontSize: '0.9em', margin: '5px 0' }}>{product.descricao}</p>
            <p style={{ fontSize: '1em', fontWeight: 'bold' }}>R$ {product.valor.toFixed(2)}</p>
            <button style={{ padding: '8px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
};

export default ProdutoCard;
