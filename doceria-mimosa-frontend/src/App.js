// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './componentes/SearchContext'; // Importando o contexto
import Header from './componentes/Header';
import ProdutosPage from './pages/ProdutosPage';
import HomePage from './pages/HomePage'; // Supondo que você tenha uma página HomePage
import SobrePage from './pages/SobrePage'; // Supondo que você tenha uma página SobrePage

const App = () => {
    return (
        <SearchProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/produtos" element={<ProdutosPage />} />
                    <Route path="/sobre" element={<SobrePage />} />
                </Routes>
            </Router>
        </SearchProvider>
    );
};

export default App;
