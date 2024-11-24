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

            {/* Banner Imagem */}
            <div style={{ marginBottom: '20px' }}>
                <img 
                    src="doceria-mimosa-frontend\src\componentes\1.png" 
                    alt="Banner da Doceria Mimosinha" 
                    style={{
                        width: '100%',
                        height: 'auto',  // Garante que a altura seja proporcional à largura
                        borderRadius: '10px',
                    }} 
                />
            </div>

            {/* Produtos em Destaque */}
<<<<<<< HEAD
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
=======
            <h2 style={{ textAlign: 'center' }}>Produtos em Destaque</h2>
            <div className="produtos-destaque" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {produtos.map(produto => (
                    <div
                        key={produto.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            width: '200px',
                            textAlign: 'center',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            padding: '10px',
                            display: 'flex',              // Usando flexbox para o layout
                            flexDirection: 'column',      // Organiza os itens de forma vertical
                            justifyContent: 'space-between', // Espaço entre os itens e o botão
                            height: '300px',              // Altura fixa para o card
                        }}
                    >
                        {/* Imagem do Produto */}
                        <img
                            src={produto.imagem} // Assumindo que o campo "imagem" contém a URL da imagem
                            alt={produto.nome}
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '10px',
                            }}
                        />

                        <h3>{produto.nome}</h3>

                        {/* Descrição (opcional) */}
                        <p style={{
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '10px',
                            flexGrow: 1, // Preenche o espaço disponível
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            {produto.descricao}
                        </p>

                        <Link
                            to={`/produtos/${produto.id}`}
                            style={{
                                textDecoration: 'none',
                                padding: '10px',
                                background: '#B8336A',
                                color: 'white',
                                borderRadius: '5px',
                                display: 'inline-block',
                                marginTop: 'auto',   // Faz o botão ir para a parte inferior
                            }}
                        >
                            Ver Detalhes
                        </Link>
                    </div>
                ))}
            </div>
>>>>>>> 0b758857ee87e8b90258eddbda2183db6e07c7b5

            {/* Rodapé */}
            <footer style={{ marginTop: '40px', textAlign: 'center' }}>
                <p>&copy; 2024 Doceria Mimosinha. Todos os direitos reservados.</p>
                <p>
<<<<<<< HEAD
                    <Link
                        to="/sobre"
                        style={{
                            textDecoration: 'none',
                            color: '#FED18C',
                        }}
                    >
=======
                    <Link to="/sobre" style={{ textDecoration: 'none', color: '#007bff' }}>
>>>>>>> 0b758857ee87e8b90258eddbda2183db6e07c7b5
                        Sobre Nós
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
