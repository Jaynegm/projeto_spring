// src/componentes/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ padding: '10px', background: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
