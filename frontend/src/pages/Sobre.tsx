// frontend/src/pages/Sobre.tsx
import React from "react";
import NavBar from "../components/NavBar";
import "./Sobre.css"; 

const Sobre: React.FC = () => {
  return (
    <div className="sobre-page">
      <NavBar />
      <div className="conteudo-sobre">
        <h2>Sobre o Projeto</h2>
        <p>Informações sobre o projeto, diferenciais, equipe, etc.</p>
      </div>
    </div>
  );
};

export default Sobre;
