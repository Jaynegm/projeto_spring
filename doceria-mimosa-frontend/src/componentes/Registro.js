import React, { useState } from "react";

const Registro = ({ navigateToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Usuário registrado com sucesso!");
        navigateToLogin();
      } else {
        alert("Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar</button>
      <p>
        Já tem uma conta?{" "}
        <button type="button" onClick={navigateToLogin}>
          Faça login
        </button>
      </p>
    </form>
  );
};

export default Registro;
