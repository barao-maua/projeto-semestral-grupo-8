// frontend/src/pages/login.tsx
import React, { useState } from "react";
import "./login.css";
import { login } from "../services/auth";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(username, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">NutriTrack</h1>
        <p className="subtitle">Bem-vindo ao NutriTrack</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu usuário"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
