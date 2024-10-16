import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header'; // Ajuste para Header
import HomePage from './pages/HomePage';
import ProdutosPage from './pages/ProdutosPage';
import SobrePage from './pages/SobrePage';

const App = () => {
    return (
        <Router>
            <Header />
            <div style={{ marginTop: '60px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/produtos" element={<ProdutosPage />} />
                    <Route path="/sobre" element={<SobrePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
