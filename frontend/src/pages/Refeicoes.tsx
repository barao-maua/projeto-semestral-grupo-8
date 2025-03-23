import React, { useEffect, useState } from "react";
import { fetchRefeicoes, Refeicao } from "../services/refeicoes";
import "./Refeicoes.css"; // Crie o arquivo se desejar customizar os estilos

const Refeicoes: React.FC = () => {
  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRefeicoes();
        setRefeicoes(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido.");
        }
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Refeições</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {refeicoes.length > 0 ? (
          refeicoes.map((item) => <li key={item.id}>{item.nome}</li>)
        ) : (
          <p>Nenhuma refeição encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default Refeicoes;
