import { useState } from "react";
import { Clock, ChevronDown, ChevronUp, Sun, Coffee, Sunset, Moon, Info, X } from "lucide-react";
import NavBar from "../components/NavBar";
import "./Refeicoes.css";

interface Substituicao {
  nome: string;
  quantidade: string;
}

interface Alimento {
  nome: string;
  quantidade: string;
  possuiSubstituicao?: boolean;
  substituicoes?: Substituicao[];
}

interface Refeicao {
  horario: string;
  nome: string;
  alimentos: Alimento[];
}

const refeicoesData: Refeicao[] = [
  {
    horario: "12:00",
    nome: "Refeição 1 (Almoço)",
    alimentos: [
      {
        nome: "Arroz",
        quantidade: "80 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Macarrão cozido (Substituir arroz + Feijão)", quantidade: "100 grama(s)" },
          { nome: "Arroz (Substituir arroz + Feijão)", quantidade: "100 grama(s)" },
          { nome: "Mandioca cozida (Substituir arroz + Feijão)", quantidade: "100 grama(s)" },
          { nome: "Batata inglesa cozida (Substituir arroz + Feijão)", quantidade: "160 grama(s)" },
        ],
      },
      { nome: "Feijão", quantidade: "70 grama(s)" },
      {
        nome: "Filé de Frango Grelhado",
        quantidade: "150 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Carne Bovina", quantidade: "120 grama(s)" },
          { nome: "Filé de Tilápia", quantidade: "200 grama(s)" },
          { nome: "Carne de porco", quantidade: "100 grama(s)" },
        ],
      },
      { nome: "Salada/Legumes (Minimo 100g)", quantidade: "À vontade" },
      {
        nome: "Maçã",
        quantidade: "1 unidade(s) média(s) ou 130g",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Banana", quantidade: "1 unidade média ou 100g" },
          { nome: "Pera", quantidade: "1 unidade pequena" },
        ],
      },
    ],
  },
  {
    horario: "16:00",
    nome: "Refeição 2 (Lanche da tarde)",
    alimentos: [
      {
        nome: "Pão de forma",
        quantidade: "2 fatia(s) ou 50g",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Pão integral", quantidade: "1 unidade média" },
          { nome: "Tapioca", quantidade: "100g" },
        ],
      },
      { nome: "Queijo Mussarela", quantidade: "40 grama(s)" },
      {
        nome: "Melancia",
        quantidade: "300 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Mamão", quantidade: "200 grama(s)" },
          { nome: "Abacaxi", quantidade: "2 fatias finas" },
        ],
      },
    ],
  },
  {
    horario: "19:00",
    nome: "Refeição 3 (Lanche da noite)",
    alimentos: [
      {
        nome: "Leite integral",
        quantidade: "200 mililitro(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Leite vegetal", quantidade: "200 mililitro(s)" },
          { nome: "Iogurte natural", quantidade: "170 grama(s)" },
        ],
      },
      { nome: "Whey Protein", quantidade: "40 grama(s)" },
      {
        nome: "Aveia",
        quantidade: "20 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Granola sem açúcar", quantidade: "25 grama(s)" },
          { nome: "Farinha de linhaça", quantidade: "15 grama(s)" },
        ],
      },
      {
        nome: "Banana",
        quantidade: "1 unidade ou 100g",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Maçã", quantidade: "130g" },
          { nome: "Uva", quantidade: "15 unidades" },
        ],
      },
    ],
  },
  {
    horario: "22:40",
    nome: "Refeição 4 (Jantar)",
    alimentos: [
      {
        nome: "Arroz",
        quantidade: "80 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Batata doce cozida", quantidade: "100 grama(s)" },
          { nome: "Quinoa cozida", quantidade: "100 grama(s)" },
        ],
      },
      { nome: "Feijão", quantidade: "70 grama(s)" },
      {
        nome: "Filé de Frango Grelhado",
        quantidade: "150 grama(s)",
        possuiSubstituicao: true,
        substituicoes: [
          { nome: "Omelete", quantidade: "2 ovos" },
          { nome: "Atum em lata", quantidade: "1 lata" },
        ],
      },
      { nome: "Salada/Legumes (Minimo 100g)", quantidade: "À vontade" },
    ],
  },
];

const orientacoesData = [
  {
    id: 1,
    titulo: "Sugestão de Suplementação",
    detalhes: `- Whey Protein
- Creatina
- Beta Alanina
- Multivitaminico *Opcional, se você não tem um consumo tão variado de cores em salada e legumes é interessante que consuma o multivitaminico pra atingir a quantidade ideal de vitaminas e minerais diários.
- Arginina *Opcional, melhora o seu fluxo sanguíneo ajudando na maior conexão da percepção de contração muscular, mas fica ao seu critério seguir utilizando ou não, não é algo obrigatório

Horários:
- Grupo 1 - Após almoço ou jantar: Multivitaminico (1 Capsula)
- Grupo 2 - Horário recomendado no plano: Whey Protein (Dose recomendada no plano)
- Grupo 3 - Antes do treino: Creatina (6g) / Beta Alanina (5g) / Arginina (2g)

OBS: Utilizar esses suplementos todos os dias. Em dias que não treinar você pode utilizar os suplementos que são do Grupo 3 antes do cardio e caso não for fazer nenhuma atividade tomar após a primeira refeição.

Sugestão de marca de suplementação:
- Growth Supplements
https://www.gsuplementos.com.br
Use o cupom de desconto: 🟧 Renato Portaluppi
*Obs: caso utilize meu cupom me avise, realizo sorteio de suplemento todos os meses para as pessoas que compraram com meu cupom.

Renato Portaluppi
Nutricionista, CRN-3 85002`,
  },
  {
    id: 2,
    titulo: "Consumo de água diário",
    detalhes: `Você sabia? A água é fundamental para os processos fisiológicos de digestão, absorção e excreção, transporte de nutrientes para as células, regulação da temperatura corporal, dentre muitas outras funções. Dica: Faça da garrafinha de água sua melhor amiga, assim fica mais fácil não esquecer de beber água.

- Consuma pelo menos 3L de água. Mas tente manter o consumo de 4L ou mais

Renato Portaluppi
Nutricionista, CRN-3 85002`,
  },
];

export default function Refeicoes() {
  const [refeicaoAberta, setRefeicaoAberta] = useState<number | null>(null);
  const [orientacaoAberta, setOrientacaoAberta] = useState<number | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [substituicoesVisiveis, setSubstituicoesVisiveis] = useState<Substituicao[]>([]);

  const toggleRefeicao = (index: number) => {
    setRefeicaoAberta(prev => (prev === index ? null : index));
  };

  const toggleOrientacao = (index: number) => {
    setOrientacaoAberta(prev => (prev === index ? null : index));
  };

  const abrirModalSubstituicoes = (substituicoes: Substituicao[]) => {
    setSubstituicoesVisiveis(substituicoes);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setSubstituicoesVisiveis([]);
  };

  const refeicaoEstilo = [
    { icon: <Sun />, cor: "bg-amber-50 border-amber-200 text-amber-700" },
    { icon: <Coffee />, cor: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { icon: <Sunset />, cor: "bg-orange-50 border-orange-200 text-orange-700" },
    { icon: <Moon />, cor: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  ];

  return (
    <div className="refeicoes-page">
      <NavBar />
      <div className="conteudo-refeicoes">
        <header className="secao-header">
          <h2 className="titulo-secao">Refeições</h2>
          <div className="titulo-linha"></div>
        </header>

        <ul className="lista-refeicoes">
          {refeicoesData.map((refeicao, index) => {
            const aberta = refeicaoAberta === index;
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
                      <span className="refeicao-horario-texto">{refeicao.horario}</span>
                    </div>
                    <div className="refeicao-nome">{refeicao.nome}</div>
                  </div>
                  <div className="refeicao-chevron">
                    {aberta ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                {aberta && (
                  <div className="refeicao-detalhes">
                    {refeicao.alimentos.map((alimento, i) => (
                      <div key={i} className="alimento-item">
                        <strong>{alimento.nome}</strong>
                        <p>{alimento.quantidade}</p>
                        {alimento.possuiSubstituicao && alimento.substituicoes && (
                          <button
                            className="btn-substituicao"
                            onClick={() => abrirModalSubstituicoes(alimento.substituicoes!)}
                          >
                            Ver opções de substituição
                          </button>
                        )}
                        <hr />
                      </div>
                    ))}
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
            const aberta = orientacaoAberta === index;
            return (
              <li key={orientacao.id} className="orientacao-item">
                <div className="orientacao-header" onClick={() => toggleOrientacao(index)}>
                  <div className="orientacao-icon">
                    <Info />
                  </div>
                  <div className="orientacao-titulo">{orientacao.titulo}</div>
                  <div className="orientacao-chevron">
                    {aberta ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                {aberta && (
                  <div className="orientacao-detalhes">
                    <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{orientacao.detalhes}</pre>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {modalAberto && (
          <div className="modal-substituicao">
            <div className="modal-conteudo">
              <div className="modal-header">
                <h3>Opções para substituir:</h3>
                <button onClick={fecharModal}>
                  <X size={20} />
                </button>
              </div>
              <ul className="modal-lista">
                {substituicoesVisiveis.map((sub, index) => (
                  <li key={index} className="modal-item">
                    <strong>{sub.nome}</strong>
                    <p>{sub.quantidade}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
