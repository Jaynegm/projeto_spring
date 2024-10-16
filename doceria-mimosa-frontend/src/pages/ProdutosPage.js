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
                console.log('Produtos retornados:', data); // Adicione este log
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <div style={{ flex: '1 1 21%', margin: '10px' }} key={produto.id}>
                            <ProdutoCard product={produto} />
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default ProdutosPage;
