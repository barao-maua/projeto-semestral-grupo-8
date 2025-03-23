

import React, { useState } from "react";
import "./Refeicoes.css";

interface Refeicao {
  horario: string;
  nome: string;
  descricao: string;
  detalhes: string;  // informações adicionais (calorias, ingredientes etc.)
}

const refeicoesData: Refeicao[] = [
  {
    horario: "12:00",
    nome: "Almoço",
    descricao: "Arroz, feijão, frango grelhado e salada",
    detalhes: "Calorias: 450 kcal. Ingredientes: Arroz (100g), feijão (80g), frango (120g)..."
  },
  {
    horario: "16:00",
    nome: "Lanche da Tarde",
    descricao: "Iogurte com frutas ou barrinha de cereal",
    detalhes: "Calorias: 200 kcal. Sugestão de frutas: banana, morango, maçã..."
  },
  {
    horario: "19:00",
    nome: "Lanche da Noite",
    descricao: "Sanduíche natural ou frutas picadas",
    detalhes: "Calorias: ~250 kcal. Pode incluir pão integral, peito de peru, queijo branco..."
  },
  {
    horario: "22:00",
    nome: "Jantar",
    descricao: "Sopa de legumes ou peixe assado com legumes",
    detalhes: "Calorias: ~300 kcal. Sopa de abóbora, batata, cenoura. Se peixe, ~100g de filé..."
  }
];

const Refeicoes: React.FC = () => {
  // Guarda o índice da refeição expandida ou null se nenhuma estiver expandida
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Função para lidar com clique em uma refeição
  const handleClick = (index: number) => {
    // Se clicar na refeição já expandida, fecha (null)
    // senão, abre a refeição clicada
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="refeicoes-page">
      <div className="conteudo-refeicoes">
        <h2 className="titulo-secao">Refeições</h2>
        <ul className="lista-refeicoes">
          {refeicoesData.map((item, index) => {
            const isExpanded = index === expandedIndex; // true se este item está expandido
            return (
              <li key={index} className="refeicao-item">
                {/* Cabeçalho da refeição (clique para expandir/recolher) */}
                <div
                  className="refeicao-header"
                  onClick={() => handleClick(index)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                >
                  <div className="refeicao-icon" style={{ marginRight: 12 }}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                      alt="icon-refeicao"
                      width="35"
                      height="35"
                    />
                  </div>
                  <div>
                    <div className="refeicao-horario">
                      {item.horario} - {item.nome}
                    </div>
                    <div className="refeicao-descricao">{item.descricao}</div>
                  </div>
                </div>

                {/* Se expandido, mostra os detalhes */}
                {isExpanded && (
                  <div className="refeicao-detalhes" style={{ marginTop: 10, paddingLeft: 47 }}>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#444" }}>
                      {item.detalhes}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <h2 className="titulo-secao">Orientações nutricionais</h2>
        <ul className="lista-orientacoes">
          <li className="orientacao-item">Sugestão de Suplementação</li>
          <li className="orientacao-item">Consumo de água diário</li>
        </ul>
      </div>
    </div>
  );
};

export default Refeicoes;


