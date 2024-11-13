import React from 'react';

const ProdutoCard = ({ produto }) => {
    const { nome, descricao, imagem, valor } = produto;

    return (
        <div style={styles.card}>
            <img src={imagem} alt={nome} style={styles.image} />
            <h3 style={styles.title}>{nome}</h3>
            <p style={styles.description}>{descricao}</p>
            <p style={styles.price}>R$ {valor.toFixed(2)}</p>
            <button style={styles.button}>Comprar</button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column', // Organiza os itens do card na vertical
        justifyContent: 'space-between', // Garante que o conteúdo se distribua pelo card
        height: '400px',  // Altura fixa do card, ajuste conforme necessário
        maxWidth: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',  // Aproxima mais os cards
        overflow: 'hidden',  // Impede que o conteúdo ultrapasse o card
        transition: 'transform 0.2s ease-in-out', // Animação de hover
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
        color: '#D2691E', // Marrom claro, como tons de doceria
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
