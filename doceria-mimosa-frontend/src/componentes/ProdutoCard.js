// src/componentes/ProdutoCard.js
import React from 'react';

const ProdutoCard = ({ product }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            width: '250px', // largura fixa
            height: '400px', // altura fixa
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            margin: '10px' // margem entre os cards
        }}>
            <img
                src={product.imagem}
                alt={product.nome}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover', // mantém a proporção da imagem
                    borderRadius: '5px'
                }}
            />
            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{product.nome}</h2>
            <p style={{ fontSize: '14px', textAlign: 'center', flex: '2' }}>{product.descricao}</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Preço: R$ {product.valor}</p>
            <button style={{
                padding: '10px 15px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                width: '100%',
                marginTop: '8px' // adiciona margem para separar do texto acima
            }}>
                Comprar
            </button>
        </div>
    );
};

export default ProdutoCard;
