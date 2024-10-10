import React, { useEffect, useState } from 'react';
import ProductCard from './componentes/ProdutoCard';

const App = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8081/produtos'); // Altere para o seu endpoint
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">Produtos</h1>
            <div className="row">
                {produtos.map(produto => (
                    <div className="col-md-4 mb-4" key={produto.id}>
                        <ProductCard product={produto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
