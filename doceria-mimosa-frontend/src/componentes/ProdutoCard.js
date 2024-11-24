<<<<<<< HEAD
// src/componentes/ProdutoCard.js
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 0b758857ee87e8b90258eddbda2183db6e07c7b5

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
<<<<<<< HEAD
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
=======
            <button style={styles.button}>Comprar</button>
>>>>>>> 0b758857ee87e8b90258eddbda2183db6e07c7b5
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
<<<<<<< HEAD
        textAlign: 'center',
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, sans-serif', // Font Poppins
=======
        display: 'flex',
        flexDirection: 'column', // Organiza os itens do card na vertical
        justifyContent: 'space-between', // Garante que o conteúdo se distribua pelo card
        height: '400px',  // Altura fixa do card, ajuste conforme necessário
        maxWidth: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',  // Aproxima mais os cards
        overflow: 'hidden',  // Impede que o conteúdo ultrapasse o card
        transition: 'transform 0.2s ease-in-out', // Animação de hover
>>>>>>> 0b758857ee87e8b90258eddbda2183db6e07c7b5
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
        flexGrow: 1, // Garante que a descrição ocupe o espaço restante
        overflow: 'hidden',  // Impede que o texto ultrapasse o card se for muito longo
        textOverflow: 'ellipsis', // Adiciona reticências no texto longo
        display: '-webkit-box',
        WebkitLineClamp: 3, // Limita a descrição a 3 linhas
        WebkitBoxOrient: 'vertical',
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
    button: {
        marginTop: 'auto', // Faz o botão "descer" até a parte inferior
        padding: '10px 20px',
        backgroundColor: '#B8336A', // Cor laranja
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

// Efeito de hover para o card
styles.card[':hover'] = {
    transform: 'scale(1.05)',  // Aumenta o card ligeiramente quando passa o mouse
};

export default ProdutoCard;
