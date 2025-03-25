
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  // Função de logout: remove o token e redireciona para /login
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/refeicoes" className="nav-link">Refeições</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          {/* Botão que chama handleLogout */}
          <button className="nav-button-logout" onClick={handleLogout}>
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

