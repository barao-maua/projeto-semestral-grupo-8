import { useEffect, useState } from "react";
import { Clock, ChevronDown, ChevronUp, Sun, Coffee, Sunset, Moon, Info, X } from "lucide-react";
import api, { setAuthToken } from "../services/api";
import NavBar from "../components/NavBar";
import "./Refeicoes.css";

// Interfaces
interface Substituicao {
  id: number;
  opcao: string;
  quantidade: string;
  unidade: string;
}

interface Alimento {
  id: number;
  nome: string;
  quantidade: string;
  unidade: string;
  substituicoes: Substituicao[];
}

interface Refeicao {
  id: number;
  horario: string;
  descricao: string;
  tipo_refeicao: { nome: string };
  alimentos: Alimento[];
}

interface Suplementacao {
  id: number;
  texto: string;
}

interface ConsumoAgua {
  id: number;
  texto: string;
}

interface Orientacao {
  id: number;
  descricao: string;
  suplementacoes: Suplementacao[];
  consumo_agua: ConsumoAgua | null;
}

// Componente principal
export default function Refeicoes() {
  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
  const [orientacoes, setOrientacoes] = useState<Orientacao[]>([]);
  const [refeicaoAberta, setRefeicaoAberta] = useState<number | null>(null);
  const [orientacaoAberta, setOrientacaoAberta] = useState<number | null>(null);
  const [alimentoSelecionado, setAlimentoSelecionado] = useState<Alimento | null>(null);

  const refeicaoEstilo = [
    { icon: <Sun />, cor: "bg-amber-50 border-amber-200 text-amber-700" },
    { icon: <Coffee />, cor: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { icon: <Sunset />, cor: "bg-orange-50 border-orange-200 text-orange-700" },
    { icon: <Moon />, cor: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) setAuthToken(token);

      try {
        const resRefeicoes = await api.get<Refeicao[]>("/refeicoes/");
        setRefeicoes(resRefeicoes.data);

        const resOrientacoes = await api.get<Orientacao[]>("/orientacoes/");
        setOrientacoes(resOrientacoes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="refeicoes-page">
      <NavBar />
      <div className="conteudo-refeicoes">
        <h2 className="titulo-secao">Refeições</h2>
        <ul className="lista-refeicoes">
          {refeicoes.map((refeicao, index) => {
            const aberta = refeicaoAberta === index;
            const estilo = refeicaoEstilo[index % refeicaoEstilo.length];
            return (
              <li key={refeicao.id} className={`refeicao-item ${estilo.cor}`}>
                <div className="refeicao-header" onClick={() => setRefeicaoAberta(aberta ? null : index)}>
                  <div className="icon-container">{estilo.icon}</div>
                  <div className="refeicao-info">
                    <div className="refeicao-horario-container">
                      <Clock className="horario-icon" />
                      <span>{refeicao.horario}</span>
                    </div>
                    <strong>{refeicao.tipo_refeicao.nome}</strong>
                  </div>
                  <div>{aberta ? <ChevronUp /> : <ChevronDown />}</div>
                </div>

                {aberta && (
                  <div className="refeicao-detalhes">
                    <p>{refeicao.descricao}</p>
                    {refeicao.alimentos.map((alimento) => (
                      <div key={alimento.id} className="alimento-item">
                        <strong>{alimento.nome}</strong>
                        <p>{`${alimento.quantidade} ${alimento.unidade}`}</p>
                        {alimento.substituicoes.length > 0 && (
                          <button
                            className="btn-substituicao"
                            onClick={() => setAlimentoSelecionado(alimento)}
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

        <h2 className="titulo-secao">Orientações</h2>
        <ul className="lista-orientacoes">
          {orientacoes.map((o, i) => (
            <li key={o.id} className="orientacao-item">
              <div className="orientacao-header" onClick={() => setOrientacaoAberta(orientacaoAberta === i ? null : i)}>
                <Info />
                <strong>{o.descricao}</strong>
                <div>{orientacaoAberta === i ? <ChevronUp /> : <ChevronDown />}</div>
              </div>
              {orientacaoAberta === i && (
                <div className="orientacao-detalhes">
                  {o.suplementacoes.length > 0 && (
                    <>
                      <h4>Suplementação</h4>
                      <ul>
                        {o.suplementacoes.map((sup) => (
                          <li key={sup.id}>- {sup.texto}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {o.consumo_agua && (
                    <>
                      <h4>Consumo de Água</h4>
                      <p>{o.consumo_agua.texto}</p>
                    </>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {alimentoSelecionado && (
        <div className="modal-substituicao" onClick={() => setAlimentoSelecionado(null)}>
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Substituições para {alimentoSelecionado.nome}</h3>
              <button onClick={() => setAlimentoSelecionado(null)}><X /></button>
            </div>
            <ul className="modal-lista">
              {alimentoSelecionado.substituicoes.map((sub) => (
                <li key={sub.id} className="modal-item">
                  <strong>{sub.opcao}</strong>
                  <p>{sub.quantidade} {sub.unidade}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
