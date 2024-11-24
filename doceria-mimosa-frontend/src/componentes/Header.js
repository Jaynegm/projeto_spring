// src/componentes/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSearch } from '../componentes/SearchContext'; // Importando o contexto

const Header = () => {
    const { searchTerm, handleSearchChange } = useSearch();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Buscando por:', searchTerm);
    };

    return (
        <nav style={{
            padding: '10px 20px',
            background: '#A2CDC0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000',
            fontFamily: "'Poppins', sans-serif",
            color: '#F3EAD6',
            boxSizing: 'border-box',
            height: '100px',
        }}>
            <img src="/logo.png" alt="Logo" style={{ width: '180px', height: '90px', objectFit: 'contain' }} />

            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                gap: '40px',
                margin: '0',
                padding: '0',
                flex: 1,
                justifyContent: 'center',
            }}>
                <li><Link to="/" style={{ color: '#F3EAD6', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/produtos" style={{ color: '#F3EAD6', textDecoration: 'none' }}>Produtos</Link></li>
                <li><Link to="/sobre" style={{ color: '#F3EAD6', textDecoration: 'none' }}>Sobre</Link></li>
            </ul>

            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{
                            padding: '8px 20px',
                            border: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            width: '200px',
                        }}
                    />
                </div>
            </form>

            <Link to="/Login">
                <button style={{
                    background: '#673C33',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    marginLeft: '20px',
                    cursor: 'pointer',
                    fontFamily: "'Poppins', sans-serif",
                }}>
                    Login
                </button>
            </Link>

            <div style={{
                marginLeft: '20px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                cursor: 'pointer',
            }}>
                <FaShoppingCart size={24} color="#F3EAD6" />
                <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: '#673C33',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '3px 8px',
                    fontSize: '12px',
                }}>
                    0
                </span>
            </div>
        </nav>
    );
};

export default Header;
