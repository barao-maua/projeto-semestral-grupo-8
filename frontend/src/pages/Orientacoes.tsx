// frontend/src/pages/Orientacoes.tsx
import React, { useEffect, useState } from "react";
import { fetchOrientacoes, Orientacao } from "../services/orientacoes";
import "./Orientacoes.css";

const Orientacoes: React.FC = () => {
  const [orientacoes, setOrientacoes] = useState<Orientacao[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchOrientacoes();
        setOrientacoes(data);
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
      <h2>Orientações</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {orientacoes.length > 0 ? (
          orientacoes.map((item) => <li key={item.id}>{item.titulo}</li>)
        ) : (
          <p>Nenhuma orientação encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default Orientacoes;
