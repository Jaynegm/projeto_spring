// src/componentes/ProdutoCard.js
import React, { useState } from 'react';

const ProdutoCard = ({ produto }) => {
    const { nome, descricao, imagem, valor } = produto;
    const [quantidade, setQuantidade] = useState(1);

    const handleQuantidadeChange = (e) => {
        setQuantidade(e.target.value);
    };

    const handleCompra = () => {
        alert(`Produto: ${nome}, Quantidade: ${quantidade}, Total: R$ ${(valor * quantidade).toFixed(2)}`);
    };

    return (
        <div style={styles.card}>
            <img src={imagem} alt={nome} style={styles.image} />
            <h3 style={styles.title}>{nome}</h3>
            <p style={styles.description}>{descricao}</p>
            <p style={styles.price}>R$ {valor.toFixed(2)}</p>
            <div style={styles.quantidadeContainer}>
                <label htmlFor="quantidade" style={styles.quantidadeLabel}>Quantidade:</label>
                <input
                    type="number"
                    id="quantidade"
                    value={quantidade}
                    onChange={handleQuantidadeChange}
                    min="1"
                    style={styles.quantidadeInput}
                />
            </div>
            <button onClick={handleCompra} style={styles.button}>Comprar</button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, sans-serif', // Font Poppins
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
    },
    title: {
        fontSize: '14px',
        margin: '10px 0',
        color: '#333',
    },
    description: {
        fontSize: '12px',
        color: '#666',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#673c33', // Marrom claro, como tons de doceria
    },
    quantidadeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
    },
    quantidadeLabel: {
        fontSize: '14px',
        marginRight: '10px',
    },
    quantidadeInput: {
        width: '50px',
        padding: '5px',
        fontSize: '14px',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#A2CDC0', // Cor de destaque
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '5px',
        marginTop: '10px',
    },
};

export default ProdutoCard;
