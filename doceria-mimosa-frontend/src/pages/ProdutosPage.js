// src/pages/ProdutosPage.js
import React, { useEffect, useState } from 'react';
import ProdutoCard from '../componentes/ProdutoCard';
import { useSearch } from '../componentes/SearchContext'; // Importando o contexto

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState([]);
    const { searchTerm } = useSearch(); // Obtendo o termo de pesquisa

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

    // Filtra os produtos com base no termo de pesquisa
    const filteredProdutos = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '10px' }}>
            {/* Banner */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img
                    src="banner_chocolate.png"
                    alt="Banner da Doceria Mimosinha"
                    style={{
                        width: '100%',
                        height: '600px',
                        maxHeight: '600px',
                        borderRadius: '10px',
                    }}
                />
            </div>

            <h2 style={styles.heading}>Nossos Produtos</h2>
            <div style={styles.grid}>
                {filteredProdutos.length > 0 ? (
                    filteredProdutos.map((produto) => (
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
    heading: {
        textAlign: 'center',
        fontSize: '24px',
        margin: '20px 0',
        color: '#673C33',
        fontFamily: 'Poppins',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5px',
    },
    noProducts: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#888',
    },
};

export default ProdutosPage;
