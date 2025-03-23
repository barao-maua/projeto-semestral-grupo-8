// frontend/src/pages/Suplementacoes.tsx
import React, { useEffect, useState } from "react";
import { fetchSuplementacoes, Suplementacao } from "../services/suplementacoes";

const Suplementacoes: React.FC = () => {
  const [suplementacoes, setSuplementacoes] = useState<Suplementacao[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSuplementacoes();
        setSuplementacoes(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar suplementações.");
        }
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Suplementações</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {suplementacoes.length > 0 ? (
          suplementacoes.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))
        ) : (
          <p>Nenhuma suplementação encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default Suplementacoes;
