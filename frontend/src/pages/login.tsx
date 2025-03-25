//LOGIN ANTIGO (DEIXAR COMENTADO POR ENQUANTO)
// import React, { useState } from "react";
// import "./login.css";
// import { login } from "../services/auth";

// const Login: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     await login(username, password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1 className="title">NutriTrack</h1>
//         <p className="subtitle">Bem-vindo ao NutriTrack</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Digite seu usuário"
//             className="input"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Digite sua senha"
//             className="input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="button">Entrar</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client"

import type React from "react"
import { useState } from "react"
import { User, Lock, LogIn } from "lucide-react"
import "./login.css"
import { login } from "../services/auth"

const Login: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError("")

    if (!username || !password) {
      setError("Por favor, preencha todos os campos")
      return
    }

    try {
      setIsLoading(true)
      await login(username, password)
      // Login bem-sucedido é tratado pelo serviço de autenticação
    } catch (err) {
      console.error(err);
      setError("Usuário ou senha incorretos");
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shape"></div>
        <div className="login-shape"></div>
      </div>

      <div className="login-box">
        <div className="login-logo">
          <div className="logo-icon">N</div>
        </div>

        <h1 className="title">NutriTrack</h1>
        <p className="subtitle">Bem-vindo ao seu assistente nutricional</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-icon">
              <User size={18} />
            </div>
            <input
              type="text"
              placeholder="Digite seu usuário"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={`button ${isLoading ? "loading" : ""}`} disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              <>
                <LogIn size={18} />
                <span>Entrar</span>
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="forgot-password">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login




