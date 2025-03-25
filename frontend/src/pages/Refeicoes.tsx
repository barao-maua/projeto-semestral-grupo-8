
import { useState } from "react";
import { Clock, ChevronDown, ChevronUp, Sun, Coffee, Sunset, Moon, Info } from "lucide-react";
import NavBar from "../components/NavBar"; 
import "./Refeicoes.css";

interface Refeicao {
  horario: string;
  nome: string;
  descricao: string;
  detalhes: string;
}

// Dados estáticos para as refeições
const refeicoesData: Refeicao[] = [
  {
    horario: "12:00",
    nome: "Almoço",
    descricao: "Arroz, feijão, frango grelhado e salada",
    detalhes: "Calorias: 450 kcal. Ingredientes: Arroz (100g), feijão (80g), frango (120g) grelhado, salada variada."
  },
  {
    horario: "16:00",
    nome: "Lanche da Tarde",
    descricao: "Iogurte com frutas ou barrinha de cereal",
    detalhes: "Calorias: 200 kcal. Sugestão: Iogurte natural com banana ou barrinha de cereal integral."
  },
  {
    horario: "19:00",
    nome: "Lanche da Noite",
    descricao: "Sanduíche natural ou frutas picadas",
    detalhes: "Calorias: ~250 kcal. Pode conter pão integral, peito de peru, queijo branco e salada, ou mix de frutas."
  },
  {
    horario: "22:00",
    nome: "Jantar",
    descricao: "Sopa de legumes ou peixe assado com legumes",
    detalhes: "Calorias: ~300 kcal. Sopa de abóbora com cenoura e batata, ou filé de peixe assado com brócolis e cenoura."
  },
];

// Dados estáticos para orientações nutricionais
const orientacoesData = [
  {
    id: 1,
    titulo: "Sugestão de Suplementação",
    detalhes:
      "Considere suplementos de vitamina D, Creatina, ômega-3 e Whey Protein conforme orientação do nutricionista.",
  },
  {
    id: 2,
    titulo: "Consumo de água diário",
    detalhes:
      "Beba pelo menos 3 litros de água por dia, distribuídos ao longo do dia. Evite ingerir grandes quantidades durante as refeições.",
  },
];

export default function Refeicoes() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedOrientacao, setExpandedOrientacao] = useState<number | null>(null);

  const toggleRefeicao = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const toggleOrientacao = (index: number) => {
    setExpandedOrientacao((prev) => (prev === index ? null : index));
  };

  // Estilo para os ícones e cores para cada refeição
  const refeicaoEstilo = [
    { icon: <Sun className="h-5 w-5" />, cor: "bg-amber-50 border-amber-200 text-amber-700" },
    { icon: <Coffee className="h-5 w-5" />, cor: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { icon: <Sunset className="h-5 w-5" />, cor: "bg-orange-50 border-orange-200 text-orange-700" },
    { icon: <Moon className="h-5 w-5" />, cor: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  ];

  return (
    <div className="refeicoes-page">
      {/* Componente NavBar inserido aqui */}
      <NavBar />

      <div className="conteudo-refeicoes">
        <header className="secao-header">
          <h2 className="titulo-secao">Refeições</h2>
          <div className="titulo-linha"></div>
        </header>

        <ul className="lista-refeicoes">
          {refeicoesData.map((item, index) => {
            const isExpanded = index === expandedIndex;
            const estilo = refeicaoEstilo[index];
            return (
              <li key={index} className={`refeicao-item ${estilo.cor}`}>
                <div className="refeicao-header" onClick={() => toggleRefeicao(index)}>
                  <div className="refeicao-icon">
                    <div className="icon-container">{estilo.icon}</div>
                  </div>
                  <div className="refeicao-info">
                    <div className="refeicao-horario-container">
                      <Clock className="horario-icon" />
                      <span className="refeicao-horario-texto">{item.horario}</span>
                    </div>
                    <div className="refeicao-nome">{item.nome}</div>
                    <div className="refeicao-descricao">{item.descricao}</div>
                  </div>
                  <div className="refeicao-chevron">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
                {isExpanded && (
                  <div className="refeicao-detalhes">
                    <p>{item.detalhes}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <header className="secao-header">
          <h2 className="titulo-secao">Orientações Nutricionais</h2>
          <div className="titulo-linha"></div>
        </header>

        <ul className="lista-orientacoes">
          {orientacoesData.map((orientacao, index) => {
            const isExpanded = index === expandedOrientacao;
            return (
              <li key={orientacao.id} className="orientacao-item">
                <div className="orientacao-header" onClick={() => toggleOrientacao(index)}>
                  <div className="orientacao-icon">
                    <Info className="h-4 w-4" />
                  </div>
                  <div className="orientacao-titulo">{orientacao.titulo}</div>
                  <div className="orientacao-chevron">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
                {isExpanded && (
                  <div className="orientacao-detalhes">
                    <p>{orientacao.detalhes}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


