// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = { nome, email, senha };
        try {
            const response = await axios.post('http://localhost:8081/auth/signup', usuario);
            console.log('Usuário registrado:', response.data);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Signup;
