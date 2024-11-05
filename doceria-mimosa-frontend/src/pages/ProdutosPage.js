// src/pages/ProdutosPage.js
import React, { useEffect, useState } from 'react';
import ProdutoCard from '../componentes/ProdutoCard';

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/produtos');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Nossos Produtos</h2>
            <div style={styles.grid}>
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))
                ) : (
                    <p style={styles.noProducts}>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    heading: {
        textAlign: 'center',
        fontSize: '24px',
        margin: '20px 0',
        color: '#D2691E', // Cor marrom
    },
    grid: {
        display: 'grid', // Mudei de flex para grid
        gridTemplateColumns: 'repeat(4, 1fr)', // Define 4 colunas
        gap: '5px',
    },
    noProducts: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#888',
    },
};

export default ProdutosPage;
