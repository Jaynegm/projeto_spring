import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importando o arquivo CSS
import axios from 'axios'; // Importando Axios para realizar requisições HTTP

const HomePage = () => {
    const [produtos, setProdutos] = useState([]);

    // Busca os produtos do MongoDB
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/produtos'); // URL da sua API
                const shuffled = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Embaralha e seleciona 5 produtos
                setProdutos(shuffled);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Bem-vindo à Doceria Mimosinha</h1>
            <p style={{ textAlign: 'center' }}>
                Confira nossos produtos incríveis!
            </p>

            {/* Produtos em Destaque */}
            <h2 style={{ textAlign: 'center' }}>Produtos em Destaque</h2>
            <div className="produtos-destaque" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {produtos.map(produto => (
                    <div key={produto.id} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', width: '200px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>{produto.nome}</h3>
                        <Link to={`/produtos/${produto.id}`} style={{ textDecoration: 'none', padding: '10px', background: '#007bff', color: 'white', borderRadius: '5px', display: 'inline-block', marginBottom: '10px' }}>
                            Ver Detalhes
                        </Link>
                    </div>
                ))}
            </div>

            {/* Rodapé */}
            <footer style={{ marginTop: '40px', textAlign: 'center' }}>
                <p>&copy; 2024 Doceria Mimosinha. Todos os direitos reservados.</p>
                <p><Link to="/sobre" style={{ textDecoration: 'none', color: '#007bff' }}>Sobre Nós</Link></p>
            </footer>
        </div>
    );
};

export default HomePage;
