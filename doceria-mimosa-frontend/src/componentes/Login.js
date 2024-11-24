// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8081/auth/login?email=${email}&senha=${senha}`);
            console.log('Usuário logado:', response.data);
        } catch (error) {
            console.error('Falha no login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
