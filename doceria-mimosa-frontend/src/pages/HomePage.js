import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProdutoCard from '../componentes/ProdutoCard'; // Importe o ProdutoCard
import axios from 'axios'; // Importando Axios para realizar requisições HTTP

const HomePage = () => {
    const [produtos, setProdutos] = useState([]);

    // Busca os produtos do MongoDB
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/produtos'); // URL da sua API
                const shuffled = response.data.sort(() => 0.4 - Math.random()).slice(0, 4); // Embaralha e seleciona 5 produtos
                setProdutos(shuffled);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div style={{ padding: '10px' }}>
            {/* Banner */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img
                    src="banner_mimosa.png" // Ajuste para o nome correto da imagem
                    alt="Banner da Doceria Mimosinha"
                    style={{
                        width: '100%',            // Mantém a largura total
                        height: 'auto',           // Ajusta a altura proporcionalmente
                        maxHeight: '600px',       // Define uma altura máxima para limitar o tamanho do banner
                        borderRadius: '10px',     // Mantém as bordas arredondadas
                    }}
                />
            </div>

            {/* Produtos em Destaque */}
            <section>
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        fontFamily: 'Poppins',
                        color: '#673c33',
                    }}
                >
                    Produtos em Destaque
                </h2>
                <div
                    className="produtos-destaque"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    {produtos.map((produto) => (
                        <ProdutoCard key={produto.id} produto={produto} /> // Usando ProdutoCard
                    ))}
                </div>
            </section>

            {/* Rodapé */}
            <footer style={{ marginTop: '40px', textAlign: 'center' }}>
                <p>&copy; 2024 Doceria Mimosinha. Todos os direitos reservados.</p>
                <p>
                    <Link
                        to="/sobre"
                        style={{
                            textDecoration: 'none',
                            color: '#FED18C',
                        }}
                    >
                        Sobre Nós
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
