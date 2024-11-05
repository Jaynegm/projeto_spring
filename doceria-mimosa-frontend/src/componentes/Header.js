// src/componentes/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ padding: '10px', background: '#FED99B', borderBottom: '2px solid #FED18C', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '60px' }}>
                <li><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/produtos" style={{ color: 'black', textDecoration: 'none' }}>Produtos</Link></li>
                <li><Link to="/sobre" style={{ color: 'black', textDecoration: 'none' }}>Sobre</Link></li>
            </ul>
            <input type="text" placeholder="Buscar..." style={{ padding: '8px 30px', borderRadius: '10px', border: '1px solid #ccc' }} />
        </nav>
    );
};

export default Header;
