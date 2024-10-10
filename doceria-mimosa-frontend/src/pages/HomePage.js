// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import ProdutoCard from '../componentes/ProdutoCard';

const HomePage = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/produtos'); // Altere para o seu endpoint
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Produtos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {produtos.map((produto) => (
                    <div style={{ flex: '1 1 21%', margin: '10px' }} key={produto.id}>
                        <ProdutoCard product={produto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
