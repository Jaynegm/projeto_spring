// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Bem-vindo à Doceria Mimosinha</h1>
            <p style={{ textAlign: 'center' }}>
                Confira nossos produtos incríveis!
            </p>
            <div style={{ textAlign: 'center' }}>
                <Link to="/produtos" style={{ textDecoration: 'none', padding: '10px 20px', background: '#007bff', color: 'white', borderRadius: '5px' }}>
                    Ver Produtos
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
