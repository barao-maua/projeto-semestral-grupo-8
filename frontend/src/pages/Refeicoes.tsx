import { useEffect, useState } from "react";
import { Clock, ChevronDown, ChevronUp, Sun, Coffee, Sunset, Moon, Info } from "lucide-react";
import api from "../services/api";
import NavBar from "../components/NavBar";
import "./Refeicoes.css";

interface Refeicao {
  id: number;
  horario: string;
  descricao: string;
  tipo_refeicao: { nome: string };
}

export default function Refeicoes() {
  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
  const [refeicaoAberta, setRefeicaoAberta] = useState<number | null>(null);
  const [orientacaoAberta, setOrientacaoAberta] = useState<number | null>(null);

  const refeicaoEstilo = [
    { icon: <Sun />, cor: "bg-amber-50 border-amber-200 text-amber-700" },
    { icon: <Coffee />, cor: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { icon: <Sunset />, cor: "bg-orange-50 border-orange-200 text-orange-700" },
    { icon: <Moon />, cor: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  ];

  const orientacoes = [
    {
      id: 1,
      titulo: "Suplementação",
      detalhes: "- Whey Protein\n- Creatina\n- Multivitamínico\n...",
    },
    {
      id: 2,
      titulo: "Consumo de água",
      detalhes: "- Beba ao menos 3L por dia\n- Leve uma garrafinha com você",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get<Refeicao[]>("/refeicoes/");
      if (res.status !== 200) {
        console.error("Erro ao buscar refeições:", res.statusText);
        return;
      }
      setRefeicoes(res.data);
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
                <strong>{o.titulo}</strong>
                <div>{orientacaoAberta === i ? <ChevronUp /> : <ChevronDown />}</div>
              </div>
              {orientacaoAberta === i && <pre>{o.detalhes}</pre>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
