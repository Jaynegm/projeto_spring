import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../componentes/2-removebg-preview.png'; // Importa a imagem

const Header = () => {
    return (
        <nav style={{
            width: '100%',             // Header ocupa 100% da largura da tela
            height: '100px',           // Altura fixa do cabeçalho (ajuste conforme necessário)
            background: '#EFCFE3', 
            borderBottom: '2px solid #EFCFE3', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', // Espaço entre o logo e os links de navegação
            padding: '0 20px',         // Espaçamento lateral para os itens do cabeçalho
            boxSizing: 'border-box',   // Certifica que o padding seja considerado na largura total
        }}>
            {/* Logo maior, com largura proporcional, mas sem afetar o cabeçalho */}
            <img 
                src={logo} 
                alt="Logo" 
                style={{
                    maxWidth: '150px',  // A largura máxima do logo (ajuste conforme necessário)
                    height: 'auto',      // Mantém a proporção da imagem
                    maxHeight: '80px',   // Limita a altura do logo para não ultrapassar o cabeçalho
                    objectFit: 'contain', // Evita distorções no logo
                    marginRight: '20px',  // Espaço entre o logo e os links
                }} 
            />
            
            {/* Links de navegação */}
            <ul style={{
                listStyleType: 'none', 
                display: 'flex', 
                gap: '60px', 
                margin: 0,        // Remove a margem padrão da lista
                padding: 0        // Remove o padding
            }}>
                <li><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/produtos" style={{ color: 'black', textDecoration: 'none' }}>Produtos</Link></li>
                <li><Link to="/sobre" style={{ color: 'black', textDecoration: 'none' }}>Sobre</Link></li>
            </ul>
            
            {/* Campo de busca */}
            <input 
                type="text" 
                placeholder="Buscar..." 
                style={{ 
                    padding: '8px 30px', 
                    borderRadius: '10px', 
                    border: '1px solid #ccc' 
                }} 
            />
        </nav>
    );
};

export default Header;
