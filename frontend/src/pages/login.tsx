import React from "react";
import "./Login.css"; 

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">NutriTrack</h1>
        <p className="subtitle">Bem-vindo ao NutriTrack</p>
        <input type="email" placeholder="Digite seu e-mail" className="input" />
        <input type="password" placeholder="Digite sua senha" className="input" />
        <button className="button">Entrar</button>
      </div>
    </div>
  );
};

export default Login;
